const getStatus = async (request, reply) => {
  return {
    message: 'Signify AI Backend API',
    status: 'running',
    timestamp: new Date().toISOString(),
  };
};

const getGenericRoute = async (request, reply) => {
  const route = request.url || '/';
  // Skip if it's the root or health endpoints
  if (route === '/' || route === '/health' || route === '/api') {
    return reply.callNotFound();
  }
  return {
    path: route,
    method: request.method,
    message: 'API endpoint',
    timestamp: new Date().toISOString(),
  };
};

const handleGenericPost = async (request, reply) => {
  const route = request.url || '/';
  return {
    path: route,
    method: request.method,
    body: request.body,
    message: 'API endpoint',
    timestamp: new Date().toISOString(),
  };
};

const handleGenericPut = async (request, reply) => {
  const route = request.url || '/';
  return {
    path: route,
    method: request.method,
    body: request.body,
    message: 'API endpoint',
    timestamp: new Date().toISOString(),
  };
};

const handleGenericDelete = async (request, reply) => {
  const route = request.url || '/';
  return {
    path: route,
    method: request.method,
    message: 'API endpoint',
    timestamp: new Date().toISOString(),
  };
};

module.exports = {
  getStatus,
  getGenericRoute,
  handleGenericPost,
  handleGenericPut,
  handleGenericDelete,
};
