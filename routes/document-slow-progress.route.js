const express = require("express");

const controller = require("../controllers/document-slow-progress.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessDocumentSlowProgress, controller.index);

module.exports = router;