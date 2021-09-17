const express = require("express");

const controller = require("../controllers/type-document.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessTyepDocument, controller.index);

router.post("/new", isPermission.isAddTypeDocument, controller.postNew);

router.get("/:id/delete", isPermission.isDeleteTypeDocument, controller.delete);

router.post("/:id/update", isPermission.isUpdateTypeDocument, controller.postUpdate);

module.exports = router;
