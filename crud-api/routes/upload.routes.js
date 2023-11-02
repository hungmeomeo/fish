const { Router } = require("express");
const { uploadImage } = require("../controller/upload.controller");
const { updateImage } = require("../controller/update.controller");
const { deleteImage } = require("../controller/delete.controller");
const {getObject} = require("../controller/object.controller");
const { upload } = require("../service/upload.service");

const router = Router();

router.post("/images", upload.single("image"), uploadImage);
router.put("/images/:id", upload.single("image"), updateImage);
router.delete("/images/:id", deleteImage);
router.get("/item/:id", getObject);

module.exports = router;
