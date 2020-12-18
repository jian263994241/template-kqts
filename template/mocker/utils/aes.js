const CryptoJS = require('crypto-js');
const AES = require("crypto-js/aes");

/**
 * 加密
 * @param word
 * @returns {*}
 */
exports.encrypt = (word) => {
  const key = CryptoJS.enc.Utf8.parse('7813464138914564');
  const srcs = CryptoJS.enc.Utf8.parse(word);
  
  const encrypted = AES.encrypt(
    srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
  );
  return encrypted.toString();
};

/**
* 解密
* @param word
* @returns {*}
*/
exports.decrypt = (word) => {
  const key = CryptoJS.enc.Utf8.parse('7813464138914564');
  const decrypted = AES.decrypt(
    word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
  );
  return CryptoJS.enc.Utf8.stringify(decrypted).toString();
};
