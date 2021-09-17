const express = require("express");

const controller = require("../controllers/task.controller");

const router = express.Router();

router.get("/", controller.index);

router.post("/newReport", controller.postNewReport);

router.get("/:id/complete", controller.complete);

// router.post("/:id/update", controller.postUpdate);

module.exports = router;
