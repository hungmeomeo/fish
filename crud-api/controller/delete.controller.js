const { ErrorHandler } = require("../utils/errorHandler");
const Image = require("../models/Item");
const { deleteImageFromCloudinary } = require("../service/delete.service");

const deleteImage = async (req, res, next) => {
  try {
    const { id } = req.params; // Get image ID from request parameters

    // Check if the image ID is valid
    if (!id) {
      throw new ErrorHandler(400, "Image ID is required");
    }

    // Find the image by ID in the database
    const image = await Image.findById(id);

    // If the image with the given ID doesn't exist, return a 404 error
    if (!image) {
      throw new ErrorHandler(404, "Image not found");
    }

    // Delete the image from Cloudinary using the URL
    await deleteImageFromCloudinary(image.imageUrl);

    // Remove the image from the database
    await Image.findByIdAndRemove(id);

    res.json({
      status: "success",
      message: "Image deleted successfully",
      data: null,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = {
  deleteImage,
};
