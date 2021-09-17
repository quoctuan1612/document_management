const express = require("express");

const controller = require("../controllers/statistics-manager.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessStatistics, controller.index);

module.exports = router;
