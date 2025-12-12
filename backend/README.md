# Backend

Backend API service for Signify AI.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm ci --only=production
npm start
```

## Docker

- **Production**: `docker build -t backend .`
- **Development**: `docker build -f Dockerfile.dev -t backend:dev .`
