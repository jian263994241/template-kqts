import AES from 'crypto-js/AES';
import encUtf8 from 'crypto-js/enc-utf8';
import modeECB from 'crypto-js/mode-ecb';
import padpPkcs7 from 'crypto-js/pad-pkcs7';

/**
 * 加密
 * @param word
 * @returns {*}
 */
export const encrypt = (word) => {
  const key = encUtf8.parse('7813464138914564');
  const srcs = encUtf8.parse(word);
  const encrypted = AES.encrypt(srcs, key, {
    mode: modeECB,
    padding: padpPkcs7,
  });
  return encrypted.toString();
};

/**
 * 解密
 * @param word
 * @returns {*}
 */
export const decrypt = (word) => {
  const key = encUtf8.parse('7813464138914564');
  const decrypted = AES.decrypt(word, key, {
    mode: modeECB,
    padding: padpPkcs7,
  });
  return encUtf8.stringify(decrypted).toString();
};

export const encryptData = (obj = {}) => encrypt(JSON.stringify(obj));
export const decryptData = (objStr) => JSON.parse(decrypt(objStr));

if (process.env.NODE_ENV != 'production') {
  window.__decrypt = decrypt;
  window.__encryptData = encryptData;
}
