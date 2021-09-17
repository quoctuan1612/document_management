const db = require("../db");

module.exports.index = (request, response) => {
  let query = request.query.employee;
  let employees = db.get("employees").value();
  let result = [];

  if (query) {
    employees.forEach(employee => {
      if (employee.name.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
        result.push(employee);
      }
    });
    response.render("employee", {
      result: result,
      query: query,
      position: db.get("position").value(),
      departments: db.get("departments").value()
    });
  } else {
    response.render("employee", {
      employees: db.get("employees").value(),
      position: db.get("position").value(),
      departments: db.get("departments").value()
    });
  }
};

module.exports.postNew = (request, response) => {
  
  let employee = db.get("employees")
                      .find({ id: request.body.id })
                      .value();
                      
  if (employee){
    response.redirect("/employees");
    return;
  }

  let department = db.get("departments")
    .find({ name: request.body.department })
    .value();

  let position = db.get("position")
    .find({ name: request.body.position })
    .value();

  request.body.department_id = department.id;
  request.body.position_id = position.id;

  db.get("employees")
    .push(request.body)
    .write();
  response.redirect("/employees");
};

module.exports.postUpdate = (request, response) => {
  let id = request.params.id;

  let department = db.get("departments")
                      .find({ name: request.body.department })
                      .value();

  let position = db.get("position")
                    .find({ name: request.body.position })
                    .value();

  db.get("employees")
    .find({ id: id })
    .assign({
      name: request.body.name,
      gender: request.body.gender,
      dob: request.body.dob,
      phone: request.body.phone,
      email: request.body.email,
      position_id: position.id,
      position: request.body.position,
      department_id: department.id,
      department: request.body.department
    })
    .write();
  response.redirect("/employees");
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  db.get("employees")
    .remove({ id: id })
    .write();
  response.redirect("/employees");
};
