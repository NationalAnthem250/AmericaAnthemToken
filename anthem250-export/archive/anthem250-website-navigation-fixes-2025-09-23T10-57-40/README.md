# Anthem250 - 250STAR Token Launch Platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- Git (optional)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Fill in your database credentials and other required values

3. **Set up the database:**
   ```bash
   npm run db:push
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   The site will be available at http://localhost:5000

### Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

## 📝 Release Notes - Navigation Fixes (September 23, 2025)

### iPhone Navigation Improvements ✅
- **Fixed iPhone hamburger menu**: Implemented universal touch/click handling with deduplication system
- **Resolved double-firing**: Added touchHandled ref to prevent multiple events from triggering simultaneously
- **Enhanced touch feedback**: Maintained visual feedback for all mobile interactions
- **Cross-device compatibility**: Solution works reliably across iPhone, Android, and desktop devices

### Key Changes
- Unified approach replacing device-specific branching logic
- Improved event handling with proper preventDefault and stopPropagation
- Better mobile user experience with consistent touch responses
- Maintained all existing navigation functionality

### Technical Implementation
- Added touch/click deduplication system using React refs
- Unified event handlers for consistent behavior
- Enhanced mobile menu overlay functionality
- Preserved all multilingual navigation support

## 🔧 Architecture

This is a comprehensive full-stack TypeScript application built with React, Vite, Express, and PostgreSQL. The platform features dual onboarding flows for both crypto-experienced and newcomer audiences, complete internationalization support across 10 languages, and advanced tokenomics for the 250STAR token commemorating America's 250th anniversary.

## 📱 Mobile Support

The application now features robust iPhone navigation support with:
- Universal hamburger menu functionality
- Touch-optimized navigation links
- Responsive design across all screen sizes
- Enhanced mobile user experience

## 🌍 Internationalization

Complete translation support for:
- English (default)
- Spanish, Portuguese, Arabic
- Japanese, Korean, Hindi
- Russian, Turkish, Chinese

## 🎯 Target Audience

- **Non-Crypto Users**: Clear storytelling, educational content, credit card payments
- **Crypto Users**: Advanced tokenomics, wallet integration, community features
- **Cultural Enthusiasts**: Historical significance, America250 partnership

## 📞 Support

For technical support or deployment assistance:
- Documentation: Check README.md and implementation notes
- Issues: Review browser console and server logs
- Community: Join Discord for real-time support