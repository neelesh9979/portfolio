const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Adjust this path to match your API routes
    createProxyMiddleware({
      target: 'http://localhost:5000', // Replace with the address of your Node.js server
      changeOrigin: true,
    })
  );
};
