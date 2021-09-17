const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
let port = process.env.PORT || 3001;

const loginRoute = require("./routes/login.route");
const forgottenPasswordRoute = require("./routes/forgottenPassword.route");
const homeRoute = require("./routes/home.route");
const departmentRoute = require("./routes/department.route");
const employeeRoute = require("./routes/employee.route");
const positionRoute = require("./routes/position.route");
const permissionRoute = require("./routes/permission.route");
const userRoute = require("./routes/user.route");
const typeDocumentRoute = require("./routes/type-document.route");
const destinationDocumentRoute = require("./routes/destination-document.route");
const incomingDocumentRoute = require("./routes/incoming-document.route");
const assignmentIncomingDocumentRoute = require("./routes/assignment-incoming-document.route");
const taskAssignmentIncomingDocumentRoute = require("./routes/tasks-assignment-incoming-document.route");
const taskRoute = require("./routes/task.route");
const statisticsRoute = require("./routes/statistics.route");
const documentProcessingTimeRoute = require("./routes/document-processing-time.route");
const documentSlowProgressRoute = require("./routes/document-slow-progress.route");
const statisticsLeaderRoute = require("./routes/statistics-leader.route");
const statisticsManagerRoute = require("./routes/statistics-manager.route");

const authMiddleware = require("./middlewares/auth.middleware");

const apiDepartmentRoute = require("./api/routes/department.route");
const apiEmployeeRoute = require("./api/routes/employee.route");

app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser("abc"));
app.use(express.static(__dirname + "/public"));

app.use("/login", loginRoute);
app.use("/forgottenPassword", forgottenPasswordRoute);
app.use("/", authMiddleware.requireAuth, homeRoute);
app.use("/departments", authMiddleware.requireAuth, departmentRoute);
app.use("/employees", authMiddleware.requireAuth, employeeRoute);
app.use("/position", authMiddleware.requireAuth, positionRoute);
app.use("/permission", authMiddleware.requireAuth, permissionRoute);
app.use("/users", authMiddleware.requireAuth, userRoute);
app.use("/documents-type", authMiddleware.requireAuth, typeDocumentRoute);
app.use("/documents-destination", authMiddleware.requireAuth, destinationDocumentRoute);
app.use("/documents-incoming", authMiddleware.requireAuth, incomingDocumentRoute);
app.use("/documents-incoming-assignment", authMiddleware.requireAuth, assignmentIncomingDocumentRoute);
app.use("/tasks-assignment-incoming-document", authMiddleware.requireAuth, taskAssignmentIncomingDocumentRoute);
app.use("/tasks", authMiddleware.requireAuth, taskRoute);
app.use("/statistics", authMiddleware.requireAuth, statisticsRoute);
app.use("/documents-processing-time", authMiddleware.requireAuth, documentProcessingTimeRoute);
app.use("/documents-slow-progress", authMiddleware.requireAuth, documentSlowProgressRoute);
app.use("/statistics-leader", authMiddleware.requireAuth, statisticsLeaderRoute);
app.use("/statistics-manager", authMiddleware.requireAuth, statisticsManagerRoute);

app.use("/api/departments", apiDepartmentRoute);
app.use("/api/employees", apiEmployeeRoute);

app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port 3001");
});
