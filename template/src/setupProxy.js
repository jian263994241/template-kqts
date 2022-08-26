const path = require('path');
const apiMocker = require('mocker-api');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function setProxy(app) {
  if (process.env.MOCK_INJECT === 'true') {
    apiMocker(
      app,
      require.resolve(path.resolve(process.cwd(), 'mocker/index.js')),
      {
        changeHost: true,
      },
    );
  }

  app.use(
    '/website',
    createProxyMiddleware({
      target: 'https://www.99bill.com',
      changeOrigin: true,
    }),
  );
};
