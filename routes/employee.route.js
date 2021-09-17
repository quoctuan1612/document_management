const express = require("express");

const controller = require("../controllers/employee.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessEmployee, controller.index);

router.post("/new", isPermission.isAddEmployee, controller.postNew);

router.post("/:id/update", isPermission.isUpdateEmployee, controller.postUpdate);

router.get("/:id/delete", isPermission.isDeleteEmployee, controller.delete);

module.exports = router;
