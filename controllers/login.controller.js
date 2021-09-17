const db = require("../db");

module.exports.index = (request, response) => {
    if (request.signedCookies.userId) {
        response.clearCookie("userId");
    }
    response.render("login", {});
};

module.exports.postLogin = (request, response) => {
    let username = request.body.username;
    let password = request.body.password;

    let user = db.get("users").find({ username: username }).value();

    if (!user) {
        response.render("login", {
            errors: [
                "Tài khoản không tồn tại!"
            ],
            values: request.body
        });
        return;
    }

    if (user.password !== password) {
        response.render("login", {
            errors: [
                "Mật khẩu không chính xác!"
            ],
            values: request.body
        });
        return;
    }

    response.cookie("userId", user.username, { signed: true });
    response.redirect("/")
};

