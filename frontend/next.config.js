/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  async rewrites() {
    // Only proxy /api in development mode
    // In production, Traefik handles routing /api to the backend
    if (process.env.NODE_ENV === 'development') {
      // For server-side rewrites, use BACKEND_URL if set (for Docker), otherwise localhost
      const backendUrl = process.env.BACKEND_URL || 'http://localhost:3001';
      
      return [
        {
          source: '/api/:path*',
          destination: `${backendUrl}/api/:path*`,
        },
      ];
    }
    // In production, return empty array (no rewrites - let Traefik handle it)
    return [];
  },
}

module.exports = nextConfig

