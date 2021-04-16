const path = require('path');
const pkg = require('./package.json');
const url = require('url');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  const isProduction = process.env.NODE_ENV === 'production';
  const publicPath = url.parse(process.env.PUBLIC_URL).path;
  const pkgDir = path.join(config.output.path, '../zip');
  const zipCacheDir = path.join(process.cwd(), '.cache');

  config.plugins.push(new WebpackBar());

  if (isProduction) {
    config.plugins.push(
      new FileManagerPlugin({
        events: {
          onEnd: {
            copy: [
              {
                source: config.output.path,
                destination: path.join(zipCacheDir, publicPath),
              },
            ],
            archive: [
              {
                source: zipCacheDir,
                destination: path.join(
                  pkgDir,
                  pkg.name + '_' + pkg.version + '.zip',
                ),
              },
            ],
            delete: [zipCacheDir],
          },
        },
      }),
    );
  }

  return config;
};
