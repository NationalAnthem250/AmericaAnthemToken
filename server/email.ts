import nodemailer from 'nodemailer';
import type { ChatMessage, WaitlistEntry } from '@shared/schema';

const ADMIN_EMAIL = 'anthem250th@gmail.com';

// Create transporter (using Gmail for simplicity - you'll need to provide app password)
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || ADMIN_EMAIL,
      pass: process.env.EMAIL_PASSWORD // You'll need to provide this as a secret
    }
  });
};

export const sendWaitlistNotification = async (entry: WaitlistEntry) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER || ADMIN_EMAIL,
      to: ADMIN_EMAIL,
      subject: '🇺🇸 New 250STAR Waitlist Registration - Anthem250',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New 250STAR Token Waitlist Registration</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${entry.name}</p>
            <p><strong>Email:</strong> ${entry.email}</p>
            <p><strong>Registration Time:</strong> ${entry.createdAt}</p>
            ${entry.metadata ? `<p><strong>Additional Info:</strong> ${JSON.stringify(entry.metadata)}</p>` : ''}
          </div>
          <p style="color: #6b7280;">Someone new has joined the waitlist for Hannah Magnelli's historic National Anthem NFT launch.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">Anthem250 - 250STAR Token Launch</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Waitlist notification sent to admin');
  } catch (error) {
    console.error('Failed to send waitlist notification:', error);
  }
};

export const sendChatNotification = async (message: ChatMessage) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER || ADMIN_EMAIL,
      to: ADMIN_EMAIL,
      subject: '💬 New Chat Message - Anthem250',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Chat Message Received</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${message.name}</p>
            <p><strong>Email:</strong> ${message.email}</p>
            <p><strong>Time:</strong> ${message.createdAt}</p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 15px;">
              <p><strong>Message:</strong></p>
              <p style="margin: 10px 0;">${message.message}</p>
            </div>
          </div>
          <p style="color: #6b7280;">A visitor has sent a message through the Anthem250 chat system.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">Anthem250 - 250STAR Token Launch</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Chat notification sent to admin');
  } catch (error) {
    console.error('Failed to send chat notification:', error);
  }
};