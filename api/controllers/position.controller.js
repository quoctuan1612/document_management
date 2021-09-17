const db = require("../../db");

module.exports.index = (request, response) => {
  response.json(db.get("position").value());
};

module.exports.show = (request, response) => {
  let id = request.params.id;
  response.json(
    db
      .get("position")
      .find({ id: id })
      .value()
  );
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  let position = db
    .get("position")
    .find({ id: request.params.id })
    .value();
  db.get("position")
    .remove({ id: id })
    .write();
  response.json(position);
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
  };