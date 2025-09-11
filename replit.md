# Anthem250 - 250STAR Token Launch

## Overview

This is a comprehensive full-stack web application for the launch of the 250STAR token - the first-ever NFT of the US National Anthem, performed by professional mezzo soprano Hannah Magnelli in commemoration of America's 250th anniversary. The platform bridges both non-crypto and crypto audiences through dual onboarding flows, educational content, and flexible payment options. The application prioritizes clear storytelling and cultural significance while maintaining advanced tokenomics for experienced collectors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js for HTTP server and API routes
- **Language**: TypeScript for type safety
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless) - ACTIVE
- **Migrations**: Drizzle Kit for schema migrations via `npm run db:push`
- **Schema**: Shared TypeScript schema definitions with Zod validation
- **Tables**: Users table and Waitlist entries table with email uniqueness constraints
- **Token Details**: 250STAR token with 1,776,000,000 total supply commemorating 1776

## Key Components

### Frontend Components
- **Navigation**: Fixed red header with countdown timer, optimized navigation links, and prominent "Join Waitlist" CTA button
- **Hero Section**: Mission-first storytelling with clear "What is Anthem250?" explanation, cultural significance focus, and prominent CTA
- **Video Section**: Enhanced Vimeo player with comprehensive browser compatibility (Chrome, Safari, Firefox, Edge) and mobile autoplay support
- **Dual Onboarding**: Smart path selection allowing users to choose "New to NFTs" or "Experienced with Crypto" journeys
- **NFT Education**: Plain-language explanations using metaphors (digital autograph, museum plaque) with comprehensive FAQ
- **America Timeline**: Interactive timeline from 1776 to 2026 showing the anthem's historical journey
- **Crypto Advanced**: Detailed tokenomics, utility breakdown, roadmap, smart contract transparency, and community features
- **Payment Options**: Dual payment system with credit card (MoonPay/Crossmint) and crypto wallet options
- **Tokenomics Section**: Professional token allocation visualization with supply details, pricing, and utility benefits
- **How to Participate**: 3-step conversion flow (Join Waitlist → Connect Wallet → Own History) with integrated email signup
- **NFT Section**: Comprehensive NFT collection showcase with featured cards, stats, benefits, and holder utilities
- **Hannah Bio Section**: Showcase of Hannah Magnelli with professional credentials and testimonials
- **America250 Section**: Partnership information with official America250 commemoration
- **Footer**: Site-wide footer with links and contact information

### Backend Infrastructure
- **Routes**: Modular route registration system in `/api` namespace
- **Storage**: DatabaseStorage implementation using PostgreSQL with Drizzle ORM
- **Waitlist API**: POST /api/waitlist and GET /api/waitlist endpoints with Zod validation
- **Error Handling**: Centralized error middleware with detailed validation messages
- **Development**: Vite integration for hot module replacement
- **Logging**: Request/response logging with timing information

### Contact & Communication
- **Contact Section**: Comprehensive footer contact information with multiple channels
- **Email Categories**: Dedicated emails for general, technical, partnership, and press inquiries
- **Community Channels**: Discord and Telegram integration for real-time support
- **Support Structure**: 24/7 community support with categorized contact methods
- **Response Times**: 24-48 hour standard response time with emergency Discord support

### UI System
- **Design System**: shadcn/ui components with Tailwind CSS
- **Theme**: Patriotic color scheme with CSS custom properties
- **Typography**: Inter font family loaded from Google Fonts
- **Icons**: Font Awesome icons and Lucide React icons
- **Responsive**: Mobile-first responsive design

## Data Flow

### Frontend Data Management
1. **Query Client**: TanStack Query handles server state with infinite stale time
2. **API Requests**: Centralized fetch wrapper with credential handling
3. **Error Handling**: Unified error boundaries and toast notifications
4. **Form State**: React Hook Form manages form state with Zod validation

### Backend Request Flow
1. **Request Logging**: All requests logged with timing and response data
2. **Route Processing**: Express middleware chain processes requests
3. **Storage Layer**: Abstract storage interface allows for easy database swapping
4. **Error Middleware**: Catches and formats errors consistently

### Database Schema
- **Users Table**: Basic user model with username/password (extensible for authentication)
- **Waitlist Entries Table**: Stores email, name, created_at timestamp, and optional metadata JSON
- **Type Safety**: Drizzle generates TypeScript types from schema with proper imports
- **Validation**: Zod schemas ensure runtime type checking and API request validation
- **Constraints**: Unique email addresses prevent duplicate waitlist registrations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tools
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **date-fns**: Date manipulation utilities

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations handle schema updates

### Production Configuration
- **Environment**: NODE_ENV=production switches to optimized mode
- **Static Assets**: Express serves built frontend from `/dist/public`
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Process Management**: Single Node.js process serves both API and static files

### Development Workflow
- **Hot Reload**: Vite provides instant frontend updates
- **TypeScript**: tsx enables direct TypeScript execution
- **Database**: `npm run db:push` syncs schema changes
- **Concurrent Development**: Single command runs both frontend and backend

### Environment Requirements
- **Node.js**: ES modules support required
- **Database**: PostgreSQL compatible database (Neon recommended)
- **Environment Variables**: DATABASE_URL for database connection

## Recent Major Updates (January 2025)

### Comprehensive Tokenomics & Roadmap Implementation
- **Advanced Token Economics Section**: Complete 250STAR tokenomics with interactive charts showing token allocation, revenue projections, and growth milestones
- **Strategic Roadmap**: 4-phase development plan from launch to America's 250th anniversary with milestone tracking and completion status
- **Utility Framework**: Detailed breakdown of token benefits including exclusive content access, collector status, event access, governance rights, and global recognition
- **Price Target Analysis**: Data-driven price projections from $1.77 launch to $100+ target at America250 milestone
- **Visual Data Presentation**: Interactive pie charts, bar graphs, and progress indicators using Recharts library
- **Smart Integration**: Tokenomics section appears for both crypto-savvy users and as default content, ensuring comprehensive coverage

## Recent Major Updates (January 2025)

### Dual Audience Optimization
- **Non-Crypto Audience Path**: Clear storytelling, educational content, America timeline, credit card payments, cultural significance focus
- **Crypto Audience Path**: Advanced tokenomics, smart contract transparency, utility details, wallet integration, community features
- **Adaptive User Experience**: Dynamic content based on user path selection with smooth scrolling navigation

### Enhanced Payment & Onboarding
- **Credit Card Integration**: MoonPay, Crossmint, and Stripe support for non-crypto users
- **Wallet Support**: Phantom, Solflare, and other Solana wallets for crypto users
- **Educational Framework**: Plain-language NFT explanations with metaphors and comprehensive FAQ

### Browser Compatibility Improvements
- **Universal Autoplay Support**: Enhanced video playback across Chrome, Safari, Firefox, and Microsoft Edge
- **Mobile Optimization**: Touch-friendly controls with device detection and fallback handling
- **Cross-Platform Testing**: Comprehensive browser and device compatibility testing

The architecture now bridges traditional and crypto audiences through intelligent onboarding flows while maintaining technical excellence with TypeScript throughout, fast build times with Vite/esbuild, and clean separation between frontend and backend with full-stack type safety.