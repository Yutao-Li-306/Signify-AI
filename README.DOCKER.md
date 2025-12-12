# Docker Setup Guide

This project uses separate Docker configurations for development and production environments.

## Production Setup

Production builds only install production dependencies, resulting in smaller, more secure images.

### Build and Run Production

```bash
# Build and start production containers
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

**Production Features:**
- Only production dependencies installed
- Optimized Next.js standalone output
- Minimal image size
- Runs on port 80 (frontend) and 8080 (backend)

## Development Setup

Development builds include all dependencies (including devDependencies) for full development capabilities.

### Build and Run Development

```bash
# Build and start development containers
docker-compose -f docker-compose.dev.yml up --build

# Or run in detached mode
docker-compose -f docker-compose.dev.yml up -d --build
```

**Development Features:**
- All dependencies installed (including devDependencies)
- Hot reload enabled
- Volume mounting for live code changes
- Runs on port 3000 (frontend) and 8080 (backend)

## Local Development (Without Docker)

### Frontend

```bash
cd frontend

# Install all dependencies (dev + prod)
npm install
# or
npm ci

# Install only production dependencies
npm ci --only=production

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Backend

```bash
cd backend

# Install all dependencies
npm install

# Install only production dependencies
npm ci --only=production

# Run development server
npm run dev

# Start production server
npm start
```

## Package Management

### Production Dependencies
- Listed in `dependencies` in `package.json`
- Installed with `npm ci --only=production`
- Included in production Docker images

### Development Dependencies
- Listed in `devDependencies` in `package.json`
- Only installed in development environments
- Excluded from production Docker images

## Environment Variables

- `NODE_ENV=production` - Production mode (optimized, no dev tools)
- `NODE_ENV=development` - Development mode (includes dev tools, hot reload)

