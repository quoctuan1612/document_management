const express = require("express");

const controller = require("../controllers/tasks-assignment-incoming-document.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessAssignmentFromLeader, controller.index);

router.post("/new", isPermission.isAccessAssignmentFromLeader, controller.postNew);

router.get("/:id/delete", isPermission.isAccessAssignmentFromLeader, controller.delete);

router.post("/:id/no-accept", isPermission.isAccessAssignmentFromLeader, controller.noAccept);

router.post("/:id/accept", isPermission.isAccessAssignmentFromLeader, controller.accept);

// router.post("/:id/update", controller.postUpdate);

module.exports = router;
