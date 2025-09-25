import nodemailer from 'nodemailer';
import type { ChatMessage, WaitlistEntry, SocialMediaActivity } from '@shared/schema';

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
      subject: '🇺🇸 New NAT250 Waitlist Registration - National Anthem 250',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New NAT250 Token Waitlist Registration</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${entry.name}</p>
            <p><strong>Email:</strong> ${entry.email}</p>
            ${entry.phone ? `<p><strong>Phone:</strong> ${entry.phone}</p>` : ''}
            <p><strong>Registration Time:</strong> ${entry.createdAt}</p>
            ${entry.metadata ? `<p><strong>Additional Info:</strong> ${JSON.stringify(entry.metadata)}</p>` : ''}
          </div>
          <p style="color: #6b7280;">Someone new has joined the waitlist for Hannah Magnelli's historic National Anthem NFT launch.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">National Anthem 250 - NAT250 Token Launch</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    // Log error silently to avoid exposing sensitive information
  }
};

export const sendChatNotification = async (message: ChatMessage) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER || ADMIN_EMAIL,
      to: ADMIN_EMAIL,
      subject: '💬 New Chat Message - National Anthem 250',
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
          <p style="color: #6b7280;">A visitor has sent a message through the National Anthem 250 chat system.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">National Anthem 250 - NAT250 Token Launch</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    // Log error silently to avoid exposing sensitive information
  }
};

export const sendEngagementNotification = async (activity: SocialMediaActivity) => {
  try {
    const transporter = createTransporter();
    
    // Map activity types to emojis and descriptions
    const activityIcons: Record<string, string> = {
      like: '❤️',
      comment: '💬',
      reply: '↩️',
      share: '🔄',
      mention: '@'
    };
    
    const icon = activityIcons[activity.activityType] || '📢';
    
    const mailOptions = {
      from: process.env.EMAIL_USER || ADMIN_EMAIL,
      to: ADMIN_EMAIL,
      subject: `${icon} New ${activity.activityType} on ${activity.platform} - Social Media Engagement`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Social Media Engagement!</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">
              ${icon} ${activity.activityType.charAt(0).toUpperCase() + activity.activityType.slice(1)} on ${activity.platform}
            </h3>
            ${activity.actorName ? `<p><strong>From:</strong> ${activity.actorName}</p>` : ''}
            ${activity.actorHandle ? `<p><strong>Handle:</strong> @${activity.actorHandle}</p>` : ''}
            ${activity.content ? `
              <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 15px;">
                <p><strong>Content:</strong></p>
                <p style="margin: 10px 0;">${activity.content}</p>
              </div>
            ` : ''}
            ${activity.actorProfileUrl ? `
              <p style="margin-top: 15px;">
                <a href="${activity.actorProfileUrl}" style="color: #3b82f6; text-decoration: none;">
                  View Profile →
                </a>
              </p>
            ` : ''}
            <p style="font-size: 12px; color: #6b7280; margin-top: 15px;">
              Time: ${new Date(activity.createdAt).toLocaleString()}
            </p>
          </div>
          <p style="color: #6b7280;">Someone engaged with your social media content!</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">Social Media Management Dashboard</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    // Log error silently to avoid exposing sensitive information
  }
};