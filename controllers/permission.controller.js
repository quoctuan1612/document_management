const db = require("../db");

module.exports.index = (request, response) => {
  let query = request.query.position;
  let permission = db.get("permission").value();
  let result = [];

  if (query) {
    permission.forEach(value => {
      if (value.name.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
        result.push(value);
      }
    });
    response.render("permission", { permission: result, query: query });
  } else {
      response.render("permission", {permission: db.get("permission").value()});
  }
 
};

module.exports.postNew = (request, response) => {
  db.get("permission")
    .push(request.body)
    .write();
  response.redirect("/permission");
};

module.exports.postUpdate = (request, response) => {
  // console.log(request.body)
  let id = request.params.id;
  db.get("permission")
    .find({ id: id })
    .assign({
      id: request.body.id,
      name: request.body.name,
      description: request.body.description,
      access_department: request.body.update_access_department,
      add_department: request.body.update_add_department,
      update_department: request.body.update_update_department,
      delete_department: request.body.update_delete_department,
      access_position: request.body.update_access_position,
      add_position: request.body.update_add_position,
      update_position: request.body.update_update_position,
      delete_position: request.body.update_delete_position,
      access_employee: request.body.update_access_employee,
      add_employee: request.body.update_add_employee,
      update_employee: request.body.update_update_employee,
      delete_employee: request.body.update_delete_employee,
      access_permission: request.body.update_access_permission,
      add_permission: request.body.update_add_permission,
      update_permission: request.body.update_update_permission,
      delete_permission: request.body.update_delete_permission,
      access_user: request.body.update_access_user,
      add_user: request.body.update_add_user,
      update_user: request.body.update_update_user,
      delete_user: request.body.update_delete_user,
      access_type_document: request.body.update_access_type_document,
      add_type_document: request.body.update_add_type_document,
      update_type_document: request.body.update_update_type_document,
      delete_type_document: request.body.update_delete_type_document,
      access_destination_document: request.body.update_access_destination_document,
      add_destination_document: request.body.update_add_destination_document,
      update_destination_document: request.body.update_update_destination_document,
      delete_destination_document: request.body.update_delete_destination_document,
      access_incoming_document: request.body.update_access_incoming_document,
      add_incoming_document: request.body.update_add_incoming_document,
      update_incoming_document: request.body.update_update_incoming_document,
      delete_incoming_document: request.body.update_delete_incoming_document,
      access_assignment_manager: request.body.update_access_assignment_manager,
      access_assignment_leader: request.body.update_access_assignment_leader,
      access_task: request.body.update_access_task,
      access_document_processing_time: request.body.update_access_document_processing_time,
      add_document_processing_time: request.body.update_add_document_processing_time,
      update_document_processing_time: request.body.update_update_document_processing_time,
      delete_document_processing_time: request.body.update_delete_document_processing_time,
      access_document_slow_progress: request.body.update_access_document_slow_progress,
      access_statistics_manager: request.body.update_access_statistics_manager
    })
    .write();
  response.redirect("/permission");
};

module.exports.delete = (request, response) => {
  let id = request.params.id;
  db.get("permission")
    .remove({ id: id })
    .write();
  response.redirect("/permission");
};
