const delay = require('mocker-api/utils/delay');
const resData = require('./res');
const { encrypt, decrypt } = require('./utils/aes');

const handler = (resData) => (req, res) => {
  const key = req.body.header.bizCode;
  const reqdata = req.body.data;
  const _resData = {};

  _resData.header = {
    rspCode: '0000',
    requestId: 'c255b396-fd8e-46c3-bcf6-c1062448eff5',
    rspMsg: '成功',
    bizCode: key,
  };

  if (resData[key]) {
    _resData.data = encrypt(JSON.stringify(resData[key]));

    console.log('------------------------------------');
    console.log('req.body.header', req.body.header);
    console.log(key, 'req', decrypt(reqdata));
    console.log(key, 'res', JSON.stringify(resData[key]));
    console.log('------------------------------------');
  } else {
    _resData.data = encrypt(JSON.stringify({ warn: '404' }));
  }

  res.send(_resData);
};

module.exports = delay(
  {
    'POST /example/webapi': handler(resData['example']),
  },
  1000,
);
