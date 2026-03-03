const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePassword = (password) => {
  return password && password.length >= 6 && password.length <= 128;
};

const validateName = (name) => {
  return name && name.trim().length >= 2 && name.trim().length <= 100;
};

const validateAdminLogin = ({ email, password }) => {
  const errors = {};

  if (!email || !email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password || !password.trim()) {
    errors.password = 'Password is required';
  } else if (!validatePassword(password)) {
    errors.password = 'Password must be 6-128 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const validateAdminRegister = ({ name, email, password }) => {
  const errors = {};

  if (!name || !name.trim()) {
    errors.name = 'Name is required';
  } else if (!validateName(name)) {
    errors.name = 'Name must be 2-100 characters';
  }

  if (!email || !email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password || !password.trim()) {
    errors.password = 'Password is required';
  } else if (!validatePassword(password)) {
    errors.password = 'Password must be 6-128 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

module.exports = {
  validateAdminLogin,
  validateAdminRegister,
};
