const db = require("../../db");

module.exports.index = (request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.json(db.get("departments").value());
};

module.exports.show = (request, response) => {
  let id = request.params.id;
  response.json(
    db
      .get("departments")
      .find({ id: id })
      .value()
  );
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  let department = db
    .get("departments")
    .find({ id: request.params.id })
    .value();
  db.get("departments")
    .remove({ id: id })
    .write();
  response.json(department);
};

module.exports.postUpdate = (request, response) => {
    let id = request.params.id;
    db.get("departments")
      .find({ id: id })
      .assign({
        id: request.body.id,
        name: request.body.name,
        dependOnDepartment: request.body.dependOnDepartment,
        description: request.body.description
      })
      .write();
    response.json(request.body);
  };