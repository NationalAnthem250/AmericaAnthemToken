# NAT250 Token Launch - Complete Website Export

**Export Date:** September 26, 2025  
**Version:** NAT250 Blog Integration Release

## What's Included

This export contains the complete NAT250 Token Launch website with all recent updates:

### ✅ **Major Updates in This Version:**

1. **Complete NAT250 Rebranding**
   - Updated from "250STAR" to "NAT250" throughout the entire application
   - Updated all 10 language translations (English, Chinese, Spanish, Japanese, Korean, Portuguese, Hindi, Russian, Arabic, Turkish)
   - Updated all React components and server-side templates

2. **New Token Supply & Tokenomics**
   - Updated total supply from 1,776,000,000 to 17,760,000 tokens
   - Recalculated all allocation amounts proportionally
   - Updated all formatting and display logic

3. **WordPress Blog Integration**
   - Added complete blog section with WordPress REST API integration
   - Added "Blog" link to navigation menu
   - Backend proxy to handle CORS issues
   - Connected to: https://anthem250th-ubpsy.wordpress.com
   - Dedicated blog page with responsive design

4. **Enhanced Navigation**
   - Updated navigation with blog link
   - Improved iOS/iPhone compatibility for mobile menu
   - Smart routing between sections and pages

### **Technical Stack:**
- **Frontend:** React 18 + TypeScript + Vite + Tailwind CSS
- **Backend:** Node.js + Express + TypeScript
- **Database:** PostgreSQL with Drizzle ORM
- **UI:** shadcn/ui component library
- **Translations:** Complete internationalization (10 languages)
- **Blog Integration:** WordPress REST API with backend proxy

### **Key Features:**
- Responsive design optimized for all devices
- Complete internationalization support
- Advanced tokenomics with interactive charts
- NFT collection showcase
- Email signup and waitlist management
- Social media integration
- WordPress blog integration
- America's 250th anniversary theming

## Installation

1. Extract the archive
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run database migrations: `npm run db:push`
5. Start development server: `npm run dev`

## Configuration

Update the `.env` file with your settings:
- `VITE_WORDPRESS_URL`: Your WordPress site URL
- `DATABASE_URL`: PostgreSQL connection string
- Email settings for notifications

## Access

The application runs on `http://localhost:5000` by default.

---

**Project:** National Anthem 250 - NAT250 Token Launch  
**Commemorating:** America's 250th Anniversary (2026)  
**Export:** Complete website with blog integration