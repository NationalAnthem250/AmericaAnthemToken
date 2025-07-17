# Hannah Magnelli America250 - National Anthem Token Launch

## Overview

This is a full-stack web application showcasing professional mezzo soprano Hannah Magnelli's tokenized version of the US National Anthem in commemoration of America's 250th anniversary. The application features a modern React frontend with a Node.js/Express backend, styled with Tailwind CSS and shadcn/ui components.

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

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling to sections
- **Hero Section**: PBS Capitol Fourth-style landing with bold banners and call-to-action messaging
- **Performers Section**: Showcase of Hannah Magnelli with professional credentials and performance highlights
- **Video Section**: Embedded Vimeo player showcasing Hannah's National Anthem performance
- **Viewing Party Section**: PBS-style viewing party kit and watch options (inspired by Capitol Fourth)
- **Token Section**: Information about the NFT tokenization with fully functional database-backed waitlist signup
- **About Section**: Biography and social media links for Hannah Magnelli
- **America250 Section**: Partnership information with official America250 commemoration
- **Footer**: Site-wide footer with links and contact information

### Backend Infrastructure
- **Routes**: Modular route registration system in `/api` namespace
- **Storage**: DatabaseStorage implementation using PostgreSQL with Drizzle ORM
- **Waitlist API**: POST /api/waitlist and GET /api/waitlist endpoints with Zod validation
- **Error Handling**: Centralized error middleware with detailed validation messages
- **Development**: Vite integration for hot module replacement
- **Logging**: Request/response logging with timing information

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

The architecture prioritizes developer experience with TypeScript throughout, fast build times with Vite/esbuild, and a clean separation between frontend and backend while maintaining type safety across the full stack.