const db = require("../db");

module.exports.index = (request, response) => {
    response.render("task", {
        assignment: db.get("assignment").value(),
        incoming_documents: db.get("incoming_documents").value()
    })
};

module.exports.postNewReport = (request, response) => {
    db.get("assignment")
        .find({incoming_document_id: request.body.id})
        .assign({
            report: request.body.new_report
        })
        .write();
    response.redirect("/tasks")
};

module.exports.complete = (request, response) => {
    // console.log("true")
    let id = request.params.id;
    let assignment = db.get("assignment").find({ incoming_document_id: id}).value();
    let employee_id = assignment.employee_id;
    let user = db.get("users").find({ username: employee_id}).value();
    let permission_id = user.permission_id;
    let permission = db.get("permission").find({ id: permission_id}).value();

    if (permission.access_assignment_manager == "Yes"){
        db.get("assignment")
            .find({incoming_document_id: id})
            .assign({
                isCompleteFromEmployee: true,
                isCompleteFromLeader: true,
                isComplete: true
            })
            .write();
        db.get("incoming_documents")
            .find({id: id})
            .assign({
                isComplete: true
            })
            .write();
        response.redirect("/tasks");
        return;
    }

    if (permission.access_assignment_leader == "Yes"){
        db.get("assignment")
            .find({incoming_document_id: id})
            .assign({
                isCompleteFromEmployee: true,
                isCompleteFromLeader: true
            })
            .write();
        response.redirect("/tasks");
        return;
    }

    db.get("assignment")
        .find({incoming_document_id: id})
        .assign({
            isCompleteFromEmployee: true
        })
        .write();
    response.redirect("/tasks")
};