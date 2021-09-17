const db = require("../../db");

module.exports.index = (request, response) => {
  response.json(db.get("employees").value());
};

module.exports.show = (request, response) => {
  let id = request.params.id;
  response.json(
    db
      .get("employees")
      .find({ id: id })
      .value()
  );
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  let employee = db
    .get("employees")
    .find({ id: request.params.id })
    .value();
  db.get("employees")
    .remove({ id: id })
    .write();
  response.json(employee);
};

module.exports.postUpdate = (request, response) => {
    let id = request.params.id;
    db.get("employees")
        .find({ id: id })
        .assign({
        id: request.body.id,
        name: request.body.name,
        gender: request.body.gender,
        dob: request.body.dob,
        phone: request.body.phone,
        email: request.body.email,
        position: request.body.position,
        department: request.body.department
        })
        .write();
  };