// pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import emailjs from '@emailjs/browser';
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

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
      var templateParams = {
        name: 'James',
        notes: 'Check this out!',
      };

      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
