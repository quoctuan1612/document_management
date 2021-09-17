const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ 
        departments: [], 
        employees: [], 
        position: [], 
        users: [], 
        permission: [],
        type_documents: [],
        destination_documents: [],
        incoming_documents: [],
        assignment: [],
        documentProcessingTime: []})
    .write();

module.exports = db;
