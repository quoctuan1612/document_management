const express = require("express");

const controller = require("../controllers/permission.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessPermission, controller.index);

router.post("/new", isPermission.isAddPermission, controller.postNew);

router.post("/:id/update", isPermission.isUpdatePermission, controller.postUpdate);

router.get("/:id/delete", isPermission.isDeletePermission, controller.delete);

module.exports = router;
