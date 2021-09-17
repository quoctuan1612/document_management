const { value } = require("../db");
const db = require("../db");

module.exports.requireAuth = (request, response, next) => {
  if (!request.signedCookies.userId){
    response.redirect("/login");
    return;
  }
  
  let user = db.get("users").find({username: request.signedCookies.userId}).value();
  
  if (!user){
    response.redirect("/login");
    return;    
  }
  
  let employee = db.get("employees").find({id: user.username}).value();

  response.locals.user = {username: user.username, 
                          employee_name: user.employee_name, 
                          avatar: user.avatar,
                          employee_department: employee.department};
  
  response.locals.user_permission = db.get("permission").find({id: user.permission_id}).value();
  next();
}