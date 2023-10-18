const { uploadToCloudinary } = require("../service/upload.service");
const { ErrorHandler } = require("../utils/errorHandler");
const { bufferToDataURI } = require("../utils/file");
const Image = require("../models/Item");
const { deleteImageFromCloudinary } = require("../service/delete.service");

const updateImage = async (req, res, next) => {
  try {
    const { id } = req.params; // Get image ID from request parameters
    const { file } = req; // Get updated data from request body

    // Check if the image ID is valid
    if (!id) {
      throw new ErrorHandler(400, "Image ID is required");
    }

    // Find the image by ID in the database
    const image = await Image.findById(id);

    // If the image with the given ID doesn't exist, return an error
    if (!image) {
      throw new ErrorHandler(404, "Image not found");
    }

    // Convert the image buffer to base64 and upload to Cloudinary
    if (file) {
      const base64 = file.buffer.toString("base64");
      const fileFormat = file.mimetype.split("/")[1];
      const { base64: dataURI } = bufferToDataURI(fileFormat, file.buffer);
      const newImageUrl = await uploadToCloudinary(dataURI, fileFormat);
      await deleteImageFromCloudinary(image.imageUrl);
      // Update the image properties
      image.imageUrl = newImageUrl.secure_url;
      console.log(newImageUrl);
    }
    const { description } = req.body;
    // Update the description if provided in the request body
    if (description) {
      image.description = description;
    }

    // Save the updated image to the database
    await image.save();

    res.json({
      status: "success",
      message: "Image updated successfully",
      data: {
        image: image,
      },
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = {
  updateImage,
};
