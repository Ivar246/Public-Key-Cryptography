
const fs = require("fs");
const encrypt = require("./encrypt");
const decrypt = require("./decrypt")
const publicKey = fs.readFileSync(__dirname + "/id_us_pub.pem", "utf8");

// Stores a Buffer object
const encryptedMessage = encrypt.encryptWithPublicKey(
    publicKey,
    "Super secret message"
);

// If you try and "crack the code", you will just get gibberish
console.log(encryptedMessage.toString());

// decryting 
const privateKey = fs.readFileSync(__dirname + "/id_us_priv.pem", "utf8");
const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey, encryptedMessage, 'top secret')
console.log(decryptedMessage.toString())