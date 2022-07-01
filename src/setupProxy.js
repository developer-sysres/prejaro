const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: 'https://data.agepartnership.co.uk',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/rest/eqr/customer/',
    createProxyMiddleware(proxy)
  );
};