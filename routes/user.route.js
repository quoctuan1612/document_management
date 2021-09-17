const express = require("express");
const multer = require("multer");

const controller = require("../controllers/user.controller");

const isPermission = require("../middlewares/isPermission.middleware");

let upload = multer({ dest: './public/uploads/' })

const router = express.Router();

router.get("/", isPermission.isAccessUser, controller.index);

router.post("/new", isPermission.isAddUser, upload.single('avatar'), controller.postNew);

router.get("/:id/delete", isPermission.isDeleteUser, controller.delete);

router.post("/:id/update", isPermission.isUpdateUser, upload.single('avatar'), controller.postUpdate);

module.exports = router;
