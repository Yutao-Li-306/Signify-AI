const auth = require('../lib/auth');

async function authRoutes(fastify, options) {
  // Better Auth handler for all auth routes
  // Register with body parsing disabled for Better Auth to handle it
  fastify.all('/auth/*', {
    config: {
      // Let Better Auth handle body parsing
      bodyLimit: 1048576, // 1MB
    }
  }, async (request, reply) => {
    try {
      // Construct the full URL
      const protocol = request.protocol || 'http';
      const host = request.headers.host || 'localhost:3001';
      const url = new URL(request.url, `${protocol}://${host}`);

      // Convert Fastify headers to Headers object
      const headers = new Headers();
      Object.entries(request.headers).forEach(([key, value]) => {
        if (value) {
          if (Array.isArray(value)) {
            value.forEach(v => headers.append(key, v));
          } else {
            headers.append(key, value.toString());
          }
        }
      });

      // Create Fetch API-compatible request
      // Fastify may have already parsed the body, so we need to handle both cases
      let body = undefined;
      if (request.body) {
        if (typeof request.body === 'string') {
          body = request.body;
        } else {
          body = JSON.stringify(request.body);
        }
      } else if (request.raw.body) {
        body = request.raw.body;
      }

      const req = new Request(url.toString(), {
        method: request.method,
        headers,
        body,
      });

      // Process authentication request
      const response = await auth.handler(req);

      // Forward response to client
      reply.status(response.status);
      
      // Copy response headers
      response.headers.forEach((value, key) => {
        reply.header(key, value);
      });

      // Send response body
      const responseBody = await response.text();
      return responseBody ? JSON.parse(responseBody) : null;
    } catch (error) {
      fastify.log.error('Authentication Error:', error);
      reply.status(500).send({
        error: 'Internal authentication error',
        message: error.message,
      });
    }
  });
}

module.exports = authRoutes;
