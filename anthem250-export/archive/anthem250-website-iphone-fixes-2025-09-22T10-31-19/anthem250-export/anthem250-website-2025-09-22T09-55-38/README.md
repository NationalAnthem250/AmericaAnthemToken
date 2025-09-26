# National Anthem 250 Website Export - Updated September 22, 2025

This is a complete export of the National Anthem 250 NFT website, ready to be deployed on any platform.

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

## ✨ Latest Updates (September 2025)

This export includes the most comprehensive international language support:

### 🌍 Complete Multi-Language Support
- **English** 🇺🇸 - Original language
- **Spanish** 🇪🇸 - Español  
- **Chinese** 🇨🇳 - 中文
- **Russian** 🇷🇺 - Русский
- **Arabic** 🇸🇦 - العربية (with RTL support)
- **Korean** 🇰🇷 - 한국어
- **Japanese** 🇯🇵 - 日本語
- **Portuguese** 🇧🇷 - Português
- **Hindi** 🇮🇳 - हिन्दी
- **Turkish** 🇹🇷 - Türkçe

### 🔧 Technical Improvements
- **iPad Navigation Fix** - Navigation links now display properly on iPad devices
- **iOS Compatibility** - Enhanced touch event handling for iPhone/iPad
- **RTL Text Support** - Right-to-left text direction for Arabic language
- **Responsive Design** - Improved breakpoints for tablet devices
- **HMR Stability** - Maintained hot module replacement functionality

### 🎯 Features
- Complete tokenomics and roadmap sections
- NFT collection showcase with detailed benefits
- Hannah Magnelli bio and performance videos
- America250 partnership information
- Dual onboarding (crypto-savvy vs newcomers)
- Payment options (crypto wallets + credit cards)
- Interactive timeline from 1776 to 2026
- Educational NFT explanations for beginners

## 🏗️ Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + shadcn/ui components
- **Translations**: Comprehensive i18n system with 500+ translation keys per language

## 🌐 Deployment

This export is ready for deployment on:
- Vercel, Netlify, or any static hosting
- Docker containers
- Traditional VPS/dedicated servers
- Cloud platforms (AWS, GCP, Azure)

## 📧 Support

For technical questions about this export:
- Check the original replit.md for architecture details
- Review the deployment script: `./deploy.sh`
- Database setup: Uses Drizzle migrations

---

**Export Date**: September 22, 2025  
**Export Contains**: Complete website with 10 language translations, iOS fixes, and all latest features