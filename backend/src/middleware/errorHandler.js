const errorHandler = (fastify) => {
  return (error, request, reply) => {
    fastify.log.error(error);
    
    reply.status(error.statusCode || 500).send({
      error: {
        message: error.message || 'Internal Server Error',
        statusCode: error.statusCode || 500,
        timestamp: new Date().toISOString(),
      },
    });
  };
};

module.exports = errorHandler;
