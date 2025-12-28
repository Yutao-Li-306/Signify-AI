const PORT = process.env.PORT || 3001;
const HOST = process.env.HOSTNAME || '0.0.0.0';
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  PORT,
  HOST,
  NODE_ENV,
};
