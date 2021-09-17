const db = require("../db");

module.exports.index = (request, response) => {
    let query = request.query.incoming_document;
    let incoming_documents = db.get("incoming_documents").value();
    let result = [];

    if (query) {
        incoming_documents.forEach(value => {
            if (value.incoming_document_name.toUpperCase().indexOf(query.toUpperCase()) !== -1
                || value.id.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
                result.push(value);
            }
        });
        response.render("tasks-assignment-incoming-document", {
            incoming_documents: result,
            query: query,
            type_documents: db.get("type_documents").value(),
            destination_documents: db.get("destination_documents").value(),
            departments: db.get("departments").value(),
            employees: db.get("employees").value(),
            assignment: db.get("assignment").value()
        });
    } else {
        response.render("tasks-assignment-incoming-document", {
            incoming_documents: incoming_documents,
            type_documents: db.get("type_documents").value(),
            destination_documents: db.get("destination_documents").value(),
            departments: db.get("departments").value(),
            employees: db.get("employees").value(),
            assignment: db.get("assignment").value()
        });
    }
};

module.exports.postNew = (request, response) => {
    let employee = db.get("employees").find({name: request.body.employee_name}).value();

    db.get("incoming_documents")
        .find({id: request.body.document_id})
        .assign({
            isAssignment: true
        })
        .write();

    db.get("assignment")
        .find({incoming_document_id: request.body.document_id})
        .assign({employee_id: employee.id,
                 employee_name: request.body.employee_name,
                 opinionFromLeader: request.body.opinionFromLeader})
        .write();    
    response.redirect("/tasks-assignment-incoming-document");
};

module.exports.delete = (request, response) => {
    let id = request.params.id;

    db.get("incoming_documents")
        .find({id: id})
        .assign({
            isAssignment: false
        })
        .write();

    db.get("assignment")
        .find({incoming_document_id: id})
        .assign({employee_id: "",
                employee_name: ""})
        .write();    
    response.redirect("/tasks-assignment-incoming-document");
};

module.exports.noAccept = (request, response) => {
    let id = request.params.id;
    db.get("assignment")
        .find({incoming_document_id: id})
        .assign({isCompleteFromEmployee: false,
                 commentFromLeader: request.body.commentFromLeader})
        .write();    
    response.redirect("/tasks-assignment-incoming-document");
};

module.exports.accept = (request, response) => {
    let id = request.params.id;
    db.get("assignment")
        .find({incoming_document_id: id})
        .assign({isCompleteFromLeader: true,
                 commentFromLeader: request.body.commentFromLeader})
        .write();    
    response.redirect("/tasks-assignment-incoming-document");
};