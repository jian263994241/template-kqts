const path = require('path');
const glob = require('glob');

function getResData() {
  const files = glob.sync(path.join(__dirname, './*/*.{json,js}'));
  const resData = {};
  files.forEach((file) => {
    const pathInfo = path.parse(file);
    const parentDirName = pathInfo.dir.replace(__dirname + '/', '');

    if (!resData[parentDirName]) {
      resData[parentDirName] = {};
    }

    resData[parentDirName][pathInfo.name] = require(file);
  });
  return resData;
}

module.exports = getResData();
