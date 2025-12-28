const getHealth = async (request, reply) => {
  return {
    status: 'healthy',
    service: 'Signify AI Backend API',
    timestamp: new Date().toISOString(),
  };
};

module.exports = {
  getHealth,
};
