const path = require('path');
const url = require('url');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  const isProduction = process.env.NODE_ENV === 'production';
  const publicPath = url.parse(process.env.PUBLIC_URL).path;
  const projectDir = path.basename(process.cwd());

  if (isProduction) {
    config.plugins.push(
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: [path.join(process.cwd(), '/.zip')],
          },
          onEnd: {
            copy: [
              {
                source: config.output.path,
                destination: path.join(
                  config.output.path,
                  '../.zip',
                  publicPath,
                  projectDir,
                ),
              },
            ],
            archive: [
              {
                source: path.join(process.cwd(), '/.zip'),
                destination: path.join(
                  config.output.path,
                  projectDir + '_' + Date.now() + '.zip',
                ),
              },
            ],
          },
        },
      }),
    );
  }

  return config;
};
