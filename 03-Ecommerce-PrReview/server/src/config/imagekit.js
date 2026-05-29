let Imagekit = require("imagekit")

let storageInstance = new Imagekit({
  urlEndpoint: process.env.IMG_URL_ENDPOINT,
  publicKey: process.env.IMG_PUBLIC_KEY,
  privateKey: process.env.IMG_PRIVATE_KEY,

})

module.exports = storageInstance