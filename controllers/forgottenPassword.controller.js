const db = require('../db');
const sendEmail = require("./sendEmail.controller");

module.exports.index = (request, response) => {
    let username = request.body.username;
    let user = db.get("users").find({ username: username }).value();

    if (user) {
        let new_password = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
        db.get("users")
            .find({ username: username })
            .assign({ password: new_password})
            .write();
        
        let user_updated = db.get("users").find({ username: username }).value();
        sendEmail(user_updated);
        response.render("login", {errors: [
            "Vui lòng kiểm tra email để xác nhận mật khẩu mới!"
        ]});
        return;
    } else {
        response.render("login", {
            errors: [
                "Tài khoản không tồn tại!"
            ],
            values: request.body
        });
        return;
    }

    
};