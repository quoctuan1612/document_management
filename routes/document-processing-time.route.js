const express = require("express");

const controller = require("../controllers/document-processing-time.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessDocumentProcessingTime, controller.index);

router.post("/new", isPermission.isAddDocumentProcessingTime, controller.postNew);

router.post("/:id/update", isPermission.isUpdateDocumentProcessingTime, controller.postUpdate);

router.get("/:id/delete", isPermission.isDeleteDocumentProcessingTime, controller.delete);

module.exports = router;
