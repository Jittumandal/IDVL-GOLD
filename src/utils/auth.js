// Frontend auth utility to check if user is admin

export const isAdminAuthenticated = () => {
  const token = localStorage.getItem('adminToken');
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isExpired = payload.exp * 1000 < Date.now();
    return !isExpired && payload.role === 'admin';
  } catch {
    return false;
  }
};

export const getAdminToken = () => {
  return localStorage.getItem('adminToken');
};

export const setAdminToken = (token) => {
  console.log('[AUTH-UTIL] Setting admin token in localStorage');
  console.log('[AUTH-UTIL] Token length:', token ? token.length : 'No token');
  if (token) {
    localStorage.setItem('adminToken', token);
    console.log('[AUTH-UTIL] Token stored successfully');
  } else {
    console.log('[AUTH-UTIL] Warning: Attempting to set empty token');
  }
};

export const removeAdminToken = () => {
  console.log('[AUTH-UTIL] Removing admin token from localStorage');
  localStorage.removeItem('adminToken');
};

export const getAdminInfo = () => {
  const token = localStorage.getItem('adminToken');
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return { id: payload.id, email: payload.email, role: payload.role };
  } catch {
    return null;
  }
};
