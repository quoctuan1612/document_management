const db = require("../db");

module.exports.index = (request, response) => {
    let query = request.query.destination_document;
    let destination_documents = db.get("destination_documents").value();
    let result = [];

    if (query) {
        destination_documents.forEach(value => {
            if (value.name.toUpperCase().indexOf(query.toUpperCase()) !== -1
                || value.id.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
                result.push(value);
            }
        });
        response.render("destination-document", { destination_documents: result, query: query });
    } else {
        response.render("destination-document", { destination_documents: db.get("destination_documents").value() });
    }
};

module.exports.postNew = (request, response) => {
    let destination_document = db.get("destination_documents").find({ id: request.body.id }).value();

    if (destination_document) {
        response.redirect("/documents-destination");
        return;
    }

    db.get("destination_documents")
        .push(request.body)
        .write();
    response.redirect("/documents-destination");
};

module.exports.postUpdate = (request, response) => {
    let id = request.params.id;
    db.get("destination_documents")
        .find({ id: id })
        .assign({
            name: request.body.name,
            description: request.body.description,
            phone: request.body.phone,
            email: request.body.email
        })
        .write();
    response.redirect("/documents-destination");
};

module.exports.delete = (request, response) => {
    let id = request.params.id;
    db.get("destination_documents")
        .remove({ id: id })
        .write();
    response.redirect("/documents-destination");
};
