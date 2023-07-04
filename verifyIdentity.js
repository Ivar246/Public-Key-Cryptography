const crypto = require("crypto");
const fs = require("fs");
const decrypt = require("./decrypt");


const receivedData = require("./signMessage")
const hash = crypto.createHash(receivedData.algorithm);
const publicKey = fs.readFileSync(__dirname + "/id_us_pub.pem", "utf8");

const decryptedMessageHex = decrypt.decryptWithPubliceKey(publicKey, receivedData.signedAndEncryptedData).toString()

const hasOfOriginalData = hash.update(JSON.stringify(receivedData.originalData))

const hashOfOriginalHex = hash.digest("hex");

if (hashOfOriginalHex === decryptedMessageHex) {
    console.log(
        "Success!  The data has not been tampered with and the sender is valid."
    );
} else {
    console.log(
        "Uh oh... Someone is trying to manipulate the data or someone else is sending this!  Do not use!"
    );
}