// Validation utilities for contact form

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[0-9+\-\s()]{10,20}$/;
  return phoneRegex.test(phone);
};

const validateName = (name) => {
  return name && name.trim().length >= 2 && name.trim().length <= 100;
};

const validateSubject = (subject) => {
  return subject && subject.trim().length >= 3 && subject.trim().length <= 200;
};

const validateMessage = (message) => {
  return message && message.trim().length >= 10 && message.trim().length <= 2000;
};

const validateContactInput = (data) => {
  const errors = {};

  // Name validation
  if (!data.name || !data.name.trim()) {
    errors.name = 'Name is required';
  } else if (!validateName(data.name)) {
    errors.name = 'Name must be between 2 and 100 characters';
  }

  // Email validation
  if (!data.email || !data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number (10-20 digits)';
  }

  // Subject validation
  if (!data.subject || !data.subject.trim()) {
    errors.subject = 'Subject is required';
  } else if (!validateSubject(data.subject)) {
    errors.subject = 'Subject must be between 3 and 200 characters';
  }

  // Message validation
  if (!data.message || !data.message.trim()) {
    errors.message = 'Message is required';
  } else if (!validateMessage(data.message)) {
    errors.message = 'Message must be between 10 and 2000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

module.exports = {
  validateEmail,
  validatePhone,
  validateName,
  validateSubject,
  validateMessage,
  validateContactInput,
};
