const path = require('path');
const apiMocker = require('mocker-api');

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
};
