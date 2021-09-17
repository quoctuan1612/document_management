const express = require("express");

const controller = require("../../api/controllers/employee.controller");

const router = express.Router();

router.get("/", controller.index);

router.get("/:id/show", controller.show);

router.get("/:id/delete", controller.delete);

router.post("/:id/update", controller.postUpdate);

module.exports = router;
