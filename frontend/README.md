# Frontend

Next.js application with server-side rendering.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Server-Side Rendering** - Optimized performance

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Docker

- **Production**: `docker build -t frontend .`
- **Development**: `docker build -f Dockerfile.dev -t frontend:dev .`
