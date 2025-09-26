# Anthem250 Website Export

This is a complete export of the Anthem250 NFT website, ready to be deployed on any platform.

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

## 📁 Project Structure

- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared types and schemas
- `attached_assets/` - Static assets and images
- `public/` - Public files

## 🌍 Features

- **Multi-language Support:** 10 languages including English, Spanish, Chinese, Russian, Korean, Japanese, Portuguese, Arabic, Turkish, and Hindi
- **NFT Collection:** Showcase of 250STAR token collection
- **Social Media Integration:** Complete social sharing functionality
- **Payment Processing:** Multiple payment options including crypto and credit cards
- **Responsive Design:** Mobile-first, fully responsive design
- **Database:** PostgreSQL with Drizzle ORM

## 🛠 Technology Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Express, TypeScript, Node.js
- **Database:** PostgreSQL, Drizzle ORM
- **UI Components:** shadcn/ui, Radix UI
- **State Management:** TanStack Query
- **Blockchain:** Solana integration ready

## 📝 Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Secret for session management
- `NODE_ENV` - Environment (development/production)

Optional:
- `AYRSHARE_API_KEY` - For social media posting
- `PORT` - Server port (default: 5000)

## 🚀 Deployment Options

### Vercel
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with automatic builds

### Heroku
1. Create a new Heroku app
2. Add PostgreSQL addon
3. Set environment variables
4. Deploy using Heroku CLI or GitHub integration

### VPS/Cloud Server
1. Install Node.js and PostgreSQL
2. Clone this repository
3. Set up PM2 for process management
4. Configure Nginx as reverse proxy

## 📧 Support

For questions or issues, refer to the included `replit.md` file for project-specific documentation.

---
Export Date: 2025-09-18T20:14:59.009Z
