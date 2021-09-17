const express = require("express");

const controller = require("../controllers/department.controller");

const isPermission = require("../middlewares/isPermission.middleware");

const router = express.Router();

router.get("/", isPermission.isAccessDepartment, controller.index);

router.post("/new", isPermission.isAddDepartment, controller.postNew);

router.post("/:id/update", isPermission.isUpdateDepartment, controller.postUpdate);

router.get("/:id/delete", isPermission.isDeleteDepartment, controller.delete);

module.exports = router;
