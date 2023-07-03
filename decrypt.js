const crypto = require("crypto");

function decryptWithPrivateKey(privateKey, encryptedMessage, passphrase) {
    return crypto.privateDecrypt(privateKey, encryptedMessage, passphrase);
}

module.exports.decryptWithPrivateKey = decryptWithPrivateKey;