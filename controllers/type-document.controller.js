const db = require("../db");

module.exports.index = (request, response) => {
    let query = request.query.type_document;
    let type_documents = db.get("type_documents").value();
    let result = [];

    if (query) {
        type_documents.forEach(value => {
            if (value.name.toUpperCase().indexOf(query.toUpperCase()) !== -1
                || value.id.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
                result.push(value);
            }
        });
        response.render("type-document", { type_documents: result, query: query });
    } else {
        response.render("type-document", { type_documents: db.get("type_documents").value() });
    }
};

module.exports.postNew = (request, response) => {
    let type_document = db.get("type_documents").find({ id: request.body.id }).value();

    if (type_document) {
        response.redirect("/documents-type");
        return;
    }

    db.get("type_documents")
        .push(request.body)
        .write();
    response.redirect("/documents-type");
};

module.exports.postUpdate = (request, response) => {
    let id = request.params.id;
    db.get("type_documents")
        .find({ id: id })
        .assign({
            name: request.body.name,
            description: request.body.description
        })
        .write();
    response.redirect("/documents-type");
};

module.exports.delete = (request, response) => {
    let id = request.params.id;
    db.get("type_documents")
        .remove({ id: id })
        .write();
    response.redirect("/documents-type");
};
