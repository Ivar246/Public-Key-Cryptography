
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
const fs = require("fs");
const encrypt = require("./encrypt");
const decrypt = require("./decrypt");

const myData = {
    firstName: "Zach",
    lastName: "Gollwitzer",
    socialSecurityNumber:
        "NO NO NO.  Never put personal info in a digitally \
  signed message since this form of cryptography does not hide the data!",
};


const myDataString = JSON.stringify(myData)
hash.update(myDataString)
const hashedData = hash.digest("hex");

const senderPrivateKey = fs.readFileSync(
    __dirname + "/id_us_priv.pem",
    "utf8"
);

const signedMessage = encrypt.encryptWithPrivateKey(
    senderPrivateKey,
    hashedData
);

const dataToSend = {
    algorithm: "sha256",
    originalData: myData,
    signedAndEncryptedData: signedMessage,
};

module.exports = dataToSend