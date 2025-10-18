// src/utils/emailService.js
import emailjs from '@emailjs/browser';

export const sendEmailService = async (data) => {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data, // pass object directly
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    console.log('✅ Email sent successfully:', result.text);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('❌ Email send failed:', error.message);
    return { success: false, message: 'Failed to send email.' };
  }
};
