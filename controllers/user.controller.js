const db = require("../db");
const sendEmail = require("./sendEmail.controller");

module.exports.index = (request, response) => {
    let query = request.query.department;
    let users = db.get("users").value();
    let result = [];

    if (query) {
        users.forEach(value => {
            if (value.name.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
                result.push(value);
            }
        });
            response.render("user", { 
                users: db.get("users").value(), 
                query: query, 
                result: result,
                permission: db.get("permission").value(),
                employees: db.get("employees").value() 
            });
    } else {
        response.render("user", {
            users: db.get("users").value(),
            permission: db.get("permission").value(),
            employees: db.get("employees").value()
        });
    }

};

module.exports.postNew = (request, response) => {
    request.body.password = "123";
    // sendEmail(request.body);
    if (request.file){
        request.body.avatar = request.file.path.split("\\").slice(1).join("/");
    }
    
    let permission = db.get("permission")
        .find({ name: request.body.permission })
        .value();
    request.body.permission_id = permission.id;

    db.get("users")
        .push(request.body)
        .write();
    response.redirect("/users");
};

module.exports.postUpdate = (request, response) => {
    let id = request.params.id;
    if (request.file){
        request.body.avatar = request.file.path.split("\\").slice(1).join("/");
    }
    db.get("users")
        .find({ username: id })
        .assign({
            permission: request.body.permission,
            avatar: request.body.avatar
        })
        .write();
    response.redirect("/users");
};

module.exports.delete = (request, response) => {
    let id = request.params.id;
    db.get("users")
        .remove({ username: id })
        .write();
    response.redirect("/users");
};
