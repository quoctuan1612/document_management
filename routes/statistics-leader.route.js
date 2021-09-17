const express = require("express");

const controller = require("../controllers/statistics-leader.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessAssignmentFromLeader, controller.index);

module.exports = router;
