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
        response.render("incoming-document", {
            incoming_documents: result,
            query: query,
            type_documents: db.get("type_documents").value(),
            destination_documents: db.get("destination_documents").value()
        });
    } else {
        response.render("incoming-document", {
            incoming_documents: incoming_documents,
            type_documents: db.get("type_documents").value(),
            destination_documents: db.get("destination_documents").value()
        });
    }
};

module.exports.postNew = (request, response) => {
    request.body.filePath = request.file.path.split("\\").slice(1).join("/");
    request.body.fileName = request.file.originalname;

    let incoming_document = db.get("incoming_documents").find({ id: request.body.id }).value();

    if (incoming_document) {
        response.redirect("/documents-incoming");
        return;
    }

    let type_document = db.get("type_documents")
        .find({ name: request.body.incoming_document_type })
        .value();

    let destination_document = db.get("destination_documents")
        .find({ name: request.body.incoming_document_destination })
        .value();

    request.body.incoming_document_destination_id = destination_document.id;
    request.body.incoming_document_type_id = type_document.id;
    request.body.isComplete = false;
    request.body.isAssignment = false;
    request.body.isAssignmentFromLeader = false;
    
    db.get("incoming_documents")
        .push(request.body)
        .write();
    response.redirect("/documents-incoming");
};

module.exports.delete = (request, response) => {
    let id = request.params.id;
    db.get("incoming_documents")
        .remove({ id: id })
        .write();
    response.redirect("/documents-incoming");
};

module.exports.postUpdate = (request, response) => {
    let id = request.params.id;

    let type_document = db.get("type_documents")
        .find({ name: request.body.incoming_document_type })
        .value();

    let destination_document = db.get("destination_documents")
        .find({ name: request.body.incoming_document_destination })
        .value();

    db.get("incoming_documents")
        .find({ id: id })
        .assign({
            id: request.body.id,
            incoming_document_type: request.body.incoming_document_type,
            incoming_document_name: request.body.incoming_document_name,
            incoming_document_destination: request.body.incoming_document_destination,
            incoming_document_date: request.body.incoming_document_date,
            incoming_document_abstract: request.body.incoming_document_abstract,
            incoming_document_content: request.body.incoming_document_content,
            incoming_document_destination_id: destination_document.id,
            incoming_document_type_id: type_document.id,
            filePath: request.file.path.split("\\").slice(1).join("/"),
            fileName: request.file.originalname
        })
        .write();
    response.redirect("/documents-incoming");
};

module.exports.download = (request, response) => {
    let id = request.params.id;

    let file = db.get("incoming_documents").find({id: id}).value();
    response.download("public\\" + file.filePath, file.fileName);
};