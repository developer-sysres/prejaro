const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: '/rest/eqr/customer/',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    'https://data.agepartnership.co.uk',
    createProxyMiddleware(proxy)
  );
};