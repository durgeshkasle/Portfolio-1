import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const contactFormSchema = yup
  .object({
    user_name: yup.string().required('Name is required'),
    user_email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Message is required'),
    message: yup.string().required('Message is required'),
  })
  .required();
