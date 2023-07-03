const crypto = require("crypto");
const fs = require("fs")

function genkeyPair() {
    const keyPair = crypto.generateKeyPairSync("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: "spki",
            format: "pem"
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem",

        }
    })
    fs.writeFileSync(__dirname + "/id_us_pub.pem", keyPair.publicKey);
    fs.writeFileSync(__dirname + "/id_us_priv.pem", keyPair.privateKey)
}

genkeyPair();