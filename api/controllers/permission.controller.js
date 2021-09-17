const db = require("../../db");

module.exports.index = (request, response) => {
  response.json(db.get("permission").value());
};

module.exports.show = (request, response) => {
  let id = request.params.id;
  response.json(
    db
      .get("permission")
      .find({ id: id })
      .value()
  );
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  let permission = db
    .get("permission")
    .find({ id: request.params.id })
    .value();
  db.get("permission")
    .remove({ id: id })
    .write();
  response.json(permission);
};

module.exports.postUpdate = (request, response) => {
    let id = request.params.id;
    db.get("permission")
        .find({ id: id })
        .assign({
            id: request.body.id,
            name: request.body.name,
            description: request.body.description
        })
        .write();
  };