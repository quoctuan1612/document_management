const db = require("../db");

module.exports.index = (request, response) => {
    let today = new Date();

    response.render("document-slow-progress", {
        documents: db.get("assignment").filter({ isComplete: false}).value(),
        today: today,
        incoming_documents: db.get("incoming_documents").value()
    });
};