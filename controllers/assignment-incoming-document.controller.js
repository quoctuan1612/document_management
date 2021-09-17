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
        response.render("assignment-incoming-document", {
            incoming_documents: result,
            query: query,
            type_documents: db.get("type_documents").value(),
            destination_documents: db.get("destination_documents").value(),
            departments: db.get("departments").value(),
            employees: db.get("employees").value(),
            assignment: db.get("assignment").value()
        });
    } else {
        let incoming_documents = db.get("incoming_documents").value();
        response.render("assignment-incoming-document", {
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
    let date = new Date();
    request.body.start_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    request.body.end_date = "";

    let document = db.get("incoming_documents").find({ id: request.body.incoming_document_id }).value();
    request.body.fileName = document.fileName;
    request.body.incoming_document_name = document.incoming_document_name;
    request.body.incoming_document_date = document.incoming_document_date;

    let documentProcessingTime = db.get("documentProcessingTime")
                                    .find({ documentType:  document.incoming_document_type, destination: document.incoming_document_destination})
                                    .value();

    try {
        date.setDate(date.getDate() + parseInt(documentProcessingTime.processingTime));
    } catch (error) { 
        response.redirect("/documents-incoming-assignment")
        return;
    }
    
    request.body.deadline = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    let department = db.get("departments")
        .find({ name: request.body.department_name })
        .value();

    if (request.body.employee_name){
        db.get("incoming_documents")
            .find({ id: request.body.incoming_document_id })
            .assign({isAssignment: true,
                    isAssignmentFromLeader: true})
            .write();

        let employee = db.get("employees")
                            .find({ name: request.body.employee_name })
                            .value();
        request.body.employee_id = employee.id;
    } else {
        request.body.employee_id = "";
        db.get("incoming_documents")
            .find({ id: request.body.incoming_document_id })
            .assign({isAssignment: false,
                    isAssignmentFromLeader: true})
            .write();
    }

    request.body.department_id = department.id;
    request.body.isComplete = false;
    request.body.isCompleteFromEmployee = false;
    request.body.isCompleteFromLeader = false;    
    request.body.report = "";
    request.body.opinionFromLeader = "";
    request.body.commentFromLeader = "";
    request.body.commentFromManager = "";

    db.get("assignment")
        .push(request.body)
        .write();
    
    response.redirect("/documents-incoming-assignment");
};

module.exports.delete = (request, response) => {
    let id = request.params.id;

    db.get("assignment")
        .remove({ incoming_document_id: id })
        .write();

    db.get("incoming_documents")
        .find({ id: id })
        .assign({isAssignment: false,
                isAssignmentFromLeader: false,
                isComplete: false})
        .write();
    response.redirect("/documents-incoming-assignment");
};

module.exports.noAccept = (request, response) => {
    let id = request.params.id;
    db.get("assignment")
        .find({incoming_document_id: id})
        .assign({isCompleteFromEmployee: false,
                 isCompleteFromLeader: false,
                 commentFromManager: request.body.commentFromManager})
        .write();    
    response.redirect("/documents-incoming-assignment");
};

module.exports.accept = (request, response) => {
    let id = request.params.id;
    let date = new Date();

    db.get("assignment")
        .find({incoming_document_id: id})
        .assign({isComplete: true,
                 commentFromManager: request.body.commentFromManager,
                 end_date: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()})
        .write();    
    
    db.get("incoming_documents")
        .find({id: id})
        .assign({isComplete: true})
        .write();   
    response.redirect("/documents-incoming-assignment");
};