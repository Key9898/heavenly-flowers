export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-+()]{9,15}$/;
  return phoneRegex.test(phone);
};

export const isValidThaiPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const thaiPhoneRegex = /^(\+66|0)[0-9]{8,9}$/;
  return thaiPhoneRegex.test(cleaned);
};

export const isValidPostalCode = (code: string): boolean => {
  return /^\d{5}$/.test(code);
};

export const isNotEmpty = (value: string | null | undefined): boolean => {
  return value !== null && value !== undefined && value.trim().length > 0;
};

export const minLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const maxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateRequired = (value: unknown, fieldName: string): ValidationResult => {
  const isValid = value !== null && value !== undefined && value !== '';
  return {
    isValid,
    errors: isValid ? [] : [`${fieldName} is required`],
  };
};

export const validateEmail = (email: string): ValidationResult => {
  const errors: string[] = [];

  if (!isNotEmpty(email)) {
    errors.push('Email is required');
  } else if (!isValidEmail(email)) {
    errors.push('Invalid email format');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validatePhone = (phone: string): ValidationResult => {
  const errors: string[] = [];

  if (!isNotEmpty(phone)) {
    errors.push('Phone number is required');
  } else if (!isValidThaiPhone(phone)) {
    errors.push('Invalid Thai phone number format');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
