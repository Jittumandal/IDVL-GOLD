// API Base URL
const DEFAULT_ORIGIN =
  typeof window !== 'undefined' && window.location?.origin
    ? window.location.origin
    : 'http://localhost:5000';
const API_BASE_URL = process.env.REACT_APP_API_URL || `${DEFAULT_ORIGIN}/api`;
const ADMIN_LOGIN_URL =
  process.env.REACT_APP_ADMIN_LOGIN_URL || '/api/admin/login.php';
const REPORT_CREATE_URL =
  process.env.REACT_APP_REPORT_CREATE_URL || '/api/reports/create.php';
const REPORT_VERIFY_URL =
  process.env.REACT_APP_REPORT_VERIFY_URL || '/api/reports/verify.php';

// Verify report by type and certification number
export const verifyReportAPI = async (input) => {
  try {
    const payload =
      typeof input === 'string'
        ? { certificationNumber: input, reportType: '' }
        : (input || {});

    const params = new URLSearchParams();
    if (payload.certificationNumber) {
      params.append('certificationNumber', payload.certificationNumber);
    }
    if (payload.reportType) {
      params.append('reportType', payload.reportType);
    }

    const response = await fetch(`${REPORT_VERIFY_URL}?${params.toString()}`);
    
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
    const response = await fetch(ADMIN_LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to login');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};


// Create report with image (manual cert number)
export const createReportWithImage = async (reportData, imageFile) => {
  try {
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();

    formData.append('type', reportData.type);
    formData.append('certificationNumber', reportData.certificationNumber);
    formData.append('customerName', reportData.customerName);
    formData.append('file', imageFile);

    const response = await fetch(REPORT_CREATE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
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
