const express = require("express");
const multer = require("multer");

const controller = require("../controllers/incoming-document.controller");

const isPermission = require("../middlewares/isPermission.middleware");

let upload = multer({ dest: './public/documents/' });

const router = express.Router();

router.get("/", isPermission.isAccessIncomingDocument, controller.index);

router.post("/new", isPermission.isAddIncomingDocument, upload.single('filePath'), controller.postNew);

router.get("/:id/download", controller.download);

router.get("/:id/delete", isPermission.isDeleteIncomingDocument, controller.delete);

router.post("/:id/update", isPermission.isUpdateIncomingDocument, upload.single('filePath'), controller.postUpdate);

module.exports = router;
