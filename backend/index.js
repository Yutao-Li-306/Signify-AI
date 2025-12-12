const fastify = require('fastify')({ logger: true });

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOSTNAME || '0.0.0.0';

// Register CORS plugin
fastify.register(require('@fastify/cors'), {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

// Health check endpoint (Traefik strips /api prefix, so /api/health becomes /health)
fastify.get('/health', async (request, reply) => {
  return {
    status: 'healthy',
    service: 'Signify AI Backend API',
    timestamp: new Date().toISOString()
  };
});

// Status endpoint (Traefik strips /api prefix, so this is just /)
fastify.get('/', async (request, reply) => {
  return {
    message: 'Signify AI Backend API',
    status: 'running',
    timestamp: new Date().toISOString()
  };
});

// Generic route handler (Traefik strips /api prefix, so /api/users becomes /users)
fastify.get('/*', async (request, reply) => {
  const route = request.url || '/';
  return {
    path: route,
    method: request.method,
    message: 'API endpoint',
    timestamp: new Date().toISOString()
  };
});

// Handle POST, PUT, DELETE routes
fastify.post('/*', async (request, reply) => {
  const route = request.url || '/';
  return {
    path: route,
    method: request.method,
    body: request.body,
    message: 'API endpoint',
    timestamp: new Date().toISOString()
  };
});

fastify.put('/*', async (request, reply) => {
  const route = request.url || '/';
  return {
    path: route,
    method: request.method,
    body: request.body,
    message: 'API endpoint',
    timestamp: new Date().toISOString()
  };
});

fastify.delete('/*', async (request, reply) => {
  const route = request.url || '/';
  return {
    path: route,
    method: request.method,
    message: 'API endpoint',
    timestamp: new Date().toISOString()
  };
});

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: HOST });
    console.log(`Backend server running on http://${HOST}:${PORT}`);
    console.log('API routes available (Traefik routes /api/* to this service)');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

