const multer = require("multer");
const cloudinary = require("cloudinary");
const { ErrorHandler } = require("../utils/errorHandler");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function deleteImageFromCloudinary(imageUrl) {
  try {
    // Extract public_id from the image URL
    const publicId = imageUrl.split("/").pop().split(".")[0];

    // Delete the image from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    // Check the result from Cloudinary API
    if (result.result === "ok") {
      return {
        success: true,
        message: "Image deleted from Cloudinary successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to delete image from Cloudinary",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error deleting image from Cloudinary: ${error.message}`,
    };
  }
}

module.exports = {
  deleteImageFromCloudinary,
};
