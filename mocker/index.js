const delay = require('mocker-api/lib/delay');
const resData = require('./res');
// const { encrypt, decrypt } = require('./utils/aes');

const handler = (resData) => (req, res) => {
  const key = req.body.header.bizCode;
  const reqdata = req.body.data;
  const _resData = {};

  _resData.header = {
    rspCode: '0000',
    requestId: 'xxxxx-xxxxxx-xxxxxx-xxxxxx',
    rspMsg: '成功',
    bizCode: key,
  };

  try {
    // _resData.data = encrypt(JSON.stringify(resData[key]));

    // console.log('------------------------------------');
    // console.log('req.body.header', req.body.header);
    // console.log(key, 'req', decrypt(reqdata));
    // console.log(key, 'res', JSON.stringify(resData[key]));
    // console.log('------------------------------------');

    _resData.data = JSON.stringify(resData[key]);
  } catch (error) {
    // _resData.data = encrypt(JSON.stringify({ warn: '404' }));

    _resData.data = JSON.stringify({ warn: '404' });
  }

  res.send(_resData);
};

module.exports = delay(
  {
    'POST /example/webapi': handler(resData['example']),
  },
  1000,
);
