const db = require("../../db");

module.exports.index = (request, response) => {
  response.json(db.get("users").value());
};

module.exports.show = (request, response) => {
  let id = request.params.id;
  response.json(
    db
      .get("users")
      .find({ id: id })
      .value()
  );
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  let user = db
    .get("users")
    .find({ id: request.params.id })
    .value();
  db.get("users")
    .remove({ id: id })
    .write();
  response.json(user);
};

module.exports.postUpdate = (request, response) => {
    let id = request.params.id;
    db.get("users")
        .find({ id: id })
        .assign({
            username: request.body.username,
            employee_name: request.body.employee_name,
            employee_email: request.body.employee_email,
            permission: request.body.permission
        })
        .write();
  };