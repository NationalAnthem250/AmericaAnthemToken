#!/bin/bash

echo "🚀 National Anthem 250 Deployment Helper"
echo "==========================================="
echo "Export Date: September 22, 2025"
echo "Includes: 10 Language Support + iOS Fixes"
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check for npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Please check your internet connection."
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Check for .env file
if [ ! -f .env ]; then
    echo ""
    echo "⚠️  No .env file found. Creating from .env.example..."
    if [ -f .env.example ]; then
        cp .env.example .env
        echo "📝 Created .env file from template"
    else
        echo "🔧 Creating basic .env file..."
        cat > .env << EOF
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/anthem250"

# Development Settings
NODE_ENV=development
PORT=5000

# Application Settings
VITE_APP_TITLE="National Anthem 250"
VITE_APP_DESCRIPTION="First NFT of the US National Anthem"

# Add your specific environment variables here
EOF
        echo "📝 Created basic .env file"
    fi
    echo ""
    echo "⚠️  IMPORTANT: Please edit .env file with your actual configuration before running the app."
    echo "   Required: DATABASE_URL with your PostgreSQL connection string"
fi

# Check for PostgreSQL
echo ""
echo "🗄️  Database Setup Instructions:"
echo "1. Ensure PostgreSQL is running"
echo "2. Update DATABASE_URL in .env file"
echo "3. Run: npm run db:push"

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌍 This export includes support for 10 languages:"
echo "   🇺🇸 English   🇪🇸 Spanish   🇨🇳 Chinese   🇷🇺 Russian   🇸🇦 Arabic"
echo "   🇰🇷 Korean    🇯🇵 Japanese  🇧🇷 Portuguese 🇮🇳 Hindi    🇹🇷 Turkish"
echo ""
echo "📱 Enhanced Features:"
echo "   • iPad/iOS navigation fixes"
echo "   • RTL support for Arabic"
echo "   • Complete tokenomics system"
echo "   • NFT education for beginners"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your database credentials"
echo "2. Run 'npm run db:push' to set up the database"
echo "3. Run 'npm run dev' to start the development server"
echo "4. Or run 'npm run build' followed by 'npm start' for production"
echo ""
echo "🌐 Visit http://localhost:5000 when running"