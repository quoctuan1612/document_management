const express = require("express");

const controller = require("../controllers/position.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessPosition, controller.index);

router.post("/new", isPermission.isAddPosition, controller.postNew);

router.post("/:id/update", isPermission.isUpdatePosition, controller.postUpdate);

router.get("/:id/delete", isPermission.isDeletePosition, controller.delete);

module.exports = router;
