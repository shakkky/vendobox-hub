import * as yup from 'yup';

const isValidEmail = email => {
  if (!email) return false;
  const schema = yup.string().email(false);
  return schema.isValidSync(email);
};

export { isValidEmail };
