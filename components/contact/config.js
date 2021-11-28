import{ init } from 'emailjs-com';
init(process.env.NEXT_PUBLIC_EMAIL_USERID);

export const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
export const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
export const USER_ID = process.env.NEXT_PUBLIC_EMAIL_USERID