const storageInstance = require("../config/imagekit");

const uploadToImagekit = async (file, fileName, folder) => {
  try {

    let options = {
      file: file.buffer,
      fileName: `${Date.now()}-${fileName}`,
      folder,
    }

    let response = await storageInstance.upload(options)

    return response

  } catch (err) {
    console.log("File not upload because somting wrong in imagekit.helper:", err);
  }
}

module.exports = uploadToImagekit


