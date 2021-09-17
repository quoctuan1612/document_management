const express = require("express");

const controller = require("../controllers/forgottenPassword.controller");

const router = express.Router();

router.post("/", controller.index);

module.exports = router;
