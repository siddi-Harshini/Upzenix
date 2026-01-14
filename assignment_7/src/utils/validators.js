export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[\d\s\-\+\(\)]{10,}$/;
  return re.test(phone);
};

export const validateCardNumber = (number) => {
  const re = /^\d{13,19}$/;
  return re.test(number.replace(/\s/g, ''));
};

export const validateCVV = (cvv) => {
  const re = /^\d{3,4}$/;
  return re.test(cvv);
};

export const validateZipCode = (zip) => {
  const re = /^\d{5,10}$/;
  return re.test(zip);
};
