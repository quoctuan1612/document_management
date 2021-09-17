const db = require("../db");

module.exports.index = (request, response) => {
  let query = request.query.department;
  let departments = db.get("departments").value();
  let result = [];

  if (query) {
    departments.forEach(value => {
      if (value.name.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
        result.push(value);
      }
    });
    response.render("department", { 
      departments: db.get("departments").value(), 
      query: query, 
      result: result 
    });
  } else {
      response.render("department", {departments: db.get("departments").value()});
  }
 
};

module.exports.postNew = (request, response) => {
  db.get("departments")
    .push(request.body)
    .write();
  response.redirect("/departments");
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
  response.redirect("/departments");
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  db.get("departments")
    .remove({ id: id })
    .write();
  response.redirect("/departments");
};
