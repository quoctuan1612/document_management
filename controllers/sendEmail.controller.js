const nodemailer = require("nodemailer");

module.exports = (user) => {
    const transporter = nodemailer.createTransport(
        "smtps://" + "forgottenangelkk" + "%40gmail.com:" + "phuphang1" + "@smtp.gmail.com"
    );

    const mailOptions = {
        from: " 'Phòng Hành chính tổng Hợp' " + "<" + "forgottenangelkk" + "@gmail.com>",
        to: "a34188@thanglong.edu.vn",
        subject: "Tìm mật khẩu",
        html: "<b> Mật khẩu mới của bạn là: "+ user.password +" </b>"
    };

    transporter.sendMail(mailOptions);
};
