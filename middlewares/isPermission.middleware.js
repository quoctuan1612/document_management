const db = require("../db");

// Permission -- Department
module.exports.isAccessDepartment = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_department == "No"){
        response.redirect("/");
        return;
    }

    next();
};

module.exports.isAddDepartment = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_department == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdateDepartment = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_department == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeleteDepartment = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_department == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Position
module.exports.isAccessPosition = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_position == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isAddPosition = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_position == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdatePosition = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_position == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeletePosition = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_position == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Employee
module.exports.isAccessEmployee = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_employee == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isAddEmployee = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_employee == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdateEmployee = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_employee == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeleteEmployee = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_employee == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Group of Right
module.exports.isAccessPermission = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_permission == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isAddPermission = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_permission == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdatePermission = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_permission == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeletePermission = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_permission == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- User
module.exports.isAccessUser = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_user == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isAddUser = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_user == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdateUser = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_user == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeleteUser = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_user == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Document Type
module.exports.isAccessTyepDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_type_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isAddTypeDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_type_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdateTypeDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_type_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeleteTypeDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_type_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Destination Document
module.exports.isAccessDestinationDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_destination_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isAddDestinationDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_destination_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdateDestinationDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_destination_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeleteDestinationDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_destination_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Incoming Document
module.exports.isAccessIncomingDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_incoming_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isAddIncomingDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_incoming_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdateIncomingDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_incoming_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeleteIncomingDocument = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_incoming_document == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Assignment From Manager
module.exports.isAccessAssignmentFromManager = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_assignment_manager == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Assignment From Leader
module.exports.isAccessAssignmentFromLeader = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_assignment_leader == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Task
module.exports.isAccessTask = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_task == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Document Processing Time
module.exports.isAccessDocumentProcessingTime = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_document_processing_time == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isAddDocumentProcessingTime = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.add_document_processing_time == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isUpdateDocumentProcessingTime = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.update_document_processing_time == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

module.exports.isDeleteDocumentProcessingTime = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.delete_document_processing_time == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Document Slow Progress
module.exports.isAccessDocumentSlowProgress = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_document_slow_progress == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};

// Permission -- Statistics
module.exports.isAccessStatistics = (request, response, next) => {
    if (!request.signedCookies.userId){
        response.redirect("/login");
        return;
    }
    
    let user = db.get("users").find({username: request.signedCookies.userId}).value();
    
    if (!user){
    response.redirect("/login");
    return;    
    }
    
    let permission = db.get("permission").find({id: user.permission_id}).value();
    
    if (permission.access_statistics == "No"){
        response.redirect("/");
        return;
    }
    
    next();
};
