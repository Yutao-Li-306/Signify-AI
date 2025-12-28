const healthController = require('../controllers/healthController');

async function healthRoutes(fastify, options) {
  // Health check endpoint (Traefik strips /api prefix, so /api/health becomes /health)
  fastify.get('/health', healthController.getHealth);
}

module.exports = healthRoutes;
