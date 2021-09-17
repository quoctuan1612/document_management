const express = require("express");

const controller = require("../controllers/destination-document.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessDestinationDocument, controller.index);

router.post("/new", isPermission.isAddDestinationDocument, controller.postNew);

router.get("/:id/delete", isPermission.isDeleteDestinationDocument, controller.delete);

router.post("/:id/update", isPermission.isDeleteDestinationDocument, controller.postUpdate);

module.exports = router;
