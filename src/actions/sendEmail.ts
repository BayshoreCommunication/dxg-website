// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export async function sendEmail(data: any) {
  const { to, subject, text } = data;

  // Setup nodemailer with your email service provider
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'info.bayshorecommunication@gmail.com',
      pass: 'Infobay@mail2023',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'info.bayshorecommunication@gmail.com',
    to,
    subject,
    text,
  };

  try {
    // Send the email
    const res = await transporter.sendMail(mailOptions);
    const result = res.response;
    console.log('result', result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
