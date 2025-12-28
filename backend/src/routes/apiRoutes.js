const apiController = require('../controllers/apiController');

async function apiRoutes(fastify, options) {
  // Status endpoint (Traefik strips /api prefix, so this is just /)
  fastify.get('/', apiController.getStatus);

  // Handle /api route (when called directly, not through Traefik)
  fastify.get('/api', apiController.getStatus);

  // Generic route handler (Traefik strips /api prefix, so /api/users becomes /users)
  fastify.get('/*', apiController.getGenericRoute);

  // Handle POST, PUT, DELETE routes
  fastify.post('/*', apiController.handleGenericPost);
  fastify.put('/*', apiController.handleGenericPut);
  fastify.delete('/*', apiController.handleGenericDelete);
}

module.exports = apiRoutes;
