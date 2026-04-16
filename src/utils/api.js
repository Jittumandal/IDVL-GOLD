// API Base URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Verify report by certification number only
export const verifyReportAPI = async (certificationNumber) => {
  try {
    const params = new URLSearchParams();
    params.append('certificationNumber', certificationNumber);

    const response = await fetch(`${API_BASE_URL}/reports/verify?${params.toString()}`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to verify report');
    }

    return data; // Return the report data directly (not data.data)
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Get all reports
export const getAllReports = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/reports`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch reports');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Get single report by ID
export const getReportById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reports/${id}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch report');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Create new report
export const createReport = async (reportData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reportData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create report');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Update report
export const updateReport = async (id, reportData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reports/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reportData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to update report');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Upload report image and save path in database
export const uploadReportImage = async (reportId, file) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_BASE_URL}/uploads/report/${reportId}`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to upload image');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Delete report
export const deleteReport = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reports/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to delete report');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Submit contact form
export const submitContactForm = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit contact form');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Admin login
export const submitAdminLogin = async (credentials) => {
  try {
    console.log('[LOGIN] Attempting login for:', credentials.email);

    const response = await fetch(`${API_BASE_URL}/admin/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log('[LOGIN] Failed with status:', response.status);
      throw new Error(data.error || 'Failed to login');
    }

    console.log('[LOGIN] Success! Token received');
    console.log('[LOGIN] Token length:', data.token ? data.token.length : 'No token');
    console.log('[LOGIN] Token starts with:', data.token ? data.token.substring(0, 20) + '...' : 'No token');

    return data;
  } catch (error) {
    console.error('[LOGIN] API Error:', error);
    throw error;
  }
};

// Create report with image (manual cert number)
export const createReportWithImage = async (reportData, imageFile) => {
  try {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      throw new Error('Admin authentication required. Please log in again.');
    }

    console.log('[UPLOAD] Token found in localStorage');
    console.log('[UPLOAD] Token length:', token.length);
    console.log('[UPLOAD] Token starts with:', token.substring(0, 20) + '...');

    if (!imageFile) {
      throw new Error('Image file is required');
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    // Upload image first
    const uploadResponse = await fetch(`${API_BASE_URL}/uploads`, {
      method: 'POST',
      body: formData,
    });

    let uploadData;
    try {
      uploadData = await uploadResponse.json();
    } catch (e) {
      throw new Error(`Upload failed: Invalid response from server (${uploadResponse.status})`);
    }

    if (!uploadResponse.ok) {
      throw new Error(uploadData.error || `Upload failed with status ${uploadResponse.status}`);
    }

    if (!uploadData.imagePath) {
      throw new Error('Image upload successful but no path returned');
    }

    console.log('[UPLOAD] Image uploaded successfully:', uploadData.imagePath);

    // Create report with image path
    const reportPayload = {
      ...reportData,
      image: uploadData.imagePath,
    };

    console.log('[CREATE-REPORT] Sending request with Authorization header');
    console.log('[CREATE-REPORT] Report payload:', reportPayload);

    const response = await fetch(`${API_BASE_URL}/reports/create-with-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(reportPayload),
    });

    let data;
    try {
      data = await response.json();
    } catch (e) {
      throw new Error(`Server error: Invalid response (${response.status})`);
    }

    if (!response.ok) {
      console.log('[CREATE-REPORT] Request failed with status:', response.status);
      console.log('[CREATE-REPORT] Error response:', data);
      throw new Error(data.error || `Failed to create report with status ${response.status}`);
    }

    console.log('[CREATE-REPORT] Report created successfully');
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
