const db = require("../db");
const shortid = require("short-id");

module.exports.index = (request, response) => {
  let query = request.query.query;
  let documentProcessingTime = db.get("documentProcessingTime").value();
  let result = [];

  if (query) {
    documentProcessingTime.forEach(value => {
      if (value.documentType.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
        result.push(value);
      }
    });
    response.render("document-processing-time", { 
      documentProcessingTime: result, 
      query: query, 
      result: result,
      type_documents: db.get("type_documents").value(),
      destination_documents: db.get("destination_documents").value()
    });
  } else {
      response.render("document-processing-time", {
        documentProcessingTime: db.get("documentProcessingTime").value(),
        type_documents: db.get("type_documents").value(),
        destination_documents: db.get("destination_documents").value()
      });
  }
 
};

module.exports.postNew = (request, response) => {
  request.body.id = shortid.generate();
  db.get("documentProcessingTime")
    .push(request.body)
    .write();
  response.redirect("/documents-processing-time");
};

module.exports.postUpdate = (request, response) => {
  let id = request.params.id;
  db.get("documentProcessingTime")
    .find({ id: id })
    .assign({
      processingTime: request.body.processingTime,
    })
    .write();
  response.redirect("/documents-processing-time");
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  db.get("documentProcessingTime")
    .remove({ id: id })
    .write();
  response.redirect("/documents-processing-time");
};
