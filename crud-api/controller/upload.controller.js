const { uploadToCloudinary } = require("../service/upload.service");
const { ErrorHandler } = require("../utils/errorHandler");
const { bufferToDataURI } = require("../utils/file");
const Image = require("../models/Item");
const uploadImage = async (req, res, next) => {
  try {
    const { file } = req;
    if (!file) throw new ErrorHandler(400, "Image is required");

    // Convert the image buffer to base64
    const base64 = file.buffer.toString("base64");

    const fileFormat = file.mimetype.split("/")[1];
    const { base64: dataURI } = bufferToDataURI(fileFormat, file.buffer);
    const imageUrl = await uploadToCloudinary(dataURI, fileFormat);

    // Extract description from the request body
    const { description } = req.body;

    // Create a new Image document with the correct imageUrl (secure_url from Cloudinary)
    const newImage = new Image({
      description: description,
      imageUrl: imageUrl.secure_url, // Store the secure_url property as a string
    });

    console.log(newImage);
    // Save the new image to MongoDB Atlas
    await newImage.save();

    res.json({
      status: "success",
      message: "Upload successful",
      data: {
        image: newImage,
      },
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = {
  uploadImage,
};
