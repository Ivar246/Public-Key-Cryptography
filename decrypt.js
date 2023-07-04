const crypto = require("crypto");

function decryptWithPrivateKey(privateKey, encryptedMessage, passphrase) {
    return crypto.privateDecrypt(privateKey, encryptedMessage, passphrase);
}

function decryptWithPubliceKey(publicKey, encryptedMessage) {
    return crypto.publicDecrypt(publicKey, encryptedMessage)
}

module.exports = {
    decryptWithPrivateKey,
    decryptWithPubliceKey
}