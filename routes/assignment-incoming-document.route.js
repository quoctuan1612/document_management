const express = require("express");

const controller = require("../controllers/assignment-incoming-document.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessAssignmentFromManager, controller.index);

router.post("/new", isPermission.isAccessAssignmentFromManager, controller.postNew);

router.get("/:id/delete", isPermission.isAccessAssignmentFromManager, controller.delete);

router.post("/:id/accept", isPermission.isAccessAssignmentFromManager, controller.accept);

router.post("/:id/no-accept", isPermission.isAccessAssignmentFromManager, controller.noAccept);

// router.post("/:id/update", controller.postUpdate);

module.exports = router;
