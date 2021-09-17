const db = require("../db");

module.exports.index = (request, response) => {
  let query = request.query.position;
  let position = db.get("position").value();
  let result = [];

  if (query) {
    position.forEach(value => {
      if (value.name.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
        result.push(value);
      }
    });
    response.render("position", { position: result, query: query });
  } else {
      response.render("position", {position: db.get("position").value()});
  }
 
};

module.exports.postNew = (request, response) => {
  db.get("position")
    .push(request.body)
    .write();
  response.redirect("/position");
};

module.exports.postUpdate = (request, response) => {
  let id = request.params.id;
  db.get("position")
    .find({ id: id })
    .assign({
      id: request.body.id,
      name: request.body.name,
      description: request.body.description
    })
    .write();
  response.redirect("/position");
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  db.get("position")
    .remove({ id: id })
    .write();
  response.redirect("/position");
};
