const db = require("../db");

module.exports.index = (request, response) => {
    let DateDiff = {inDays: function(d1, d2) { var t2 = d2.getTime(); var t1 = d1.getTime(); return parseInt((t2-t1)/(24*3600*1000));}}

    let query_start = request.query.start;
    let query_end = request.query.end;
    let start_date;
    let end_date;
    let list_document = [];
    let data_assignment = [];
    let data_assignment_count = [];
    let data_incoming_document = [];
    let data_assignment_document_type = [];
    let data_assignment_document_type_count = [];
    let backgroundColor = [];
    let backgroundColorPie = ['rgb(255, 99, 132)',
                              'rgb(54, 162, 235)',
                              'rgb(255, 205, 86)'];
    let assignment = db.get("assignment").value();
    let incoming_documents = db.get("incoming_documents").value();

    if (query_start || query_end){
        start_date = new Date ([query_start.split("-")[1], query_start.split("-")[2], query_start.split("-")[0]].join(","));
        end_date = new Date ([query_end.split("-")[1], query_end.split("-")[2], query_end.split("-")[0]].join(","));
    }

    if (start_date){
        assignment.forEach((value, index) => {
            let baseline = (value.start_date).split("/");
            let date_baseline = new Date(baseline[1] + ", " + baseline[0] + ", " +  baseline[2])
            if ((DateDiff.inDays(start_date, date_baseline) >= 0) && (DateDiff.inDays(date_baseline, end_date) >= 0)){
                data_incoming_document.push(value.incoming_document_id);
                if (data_assignment.indexOf(value.start_date) == -1){
                    data_assignment.push(value.start_date);
                    data_assignment_count.push(1);
                    backgroundColor.push("rgb(38,185,154)");
                }else {
                    let index_ = data_assignment.indexOf(value.start_date);
                    data_assignment_count.fill(data_assignment_count[index_] + 1, index_, index_ + 1);
                }
                
            }
        });
    };
    

    let datasets = [{
        label: "Số văn bản",
        data: data_assignment_count,
        backgroundColor: backgroundColor
    }];

    incoming_documents.forEach((value, index) => {
        if (data_incoming_document.indexOf(value.id) !== -1){
            if (data_assignment_document_type.indexOf(value.incoming_document_type) == -1){
                data_assignment_document_type.push(value.incoming_document_type);
                data_assignment_document_type_count.push(1);
                list_document.push(value);
            } else {
                list_document.push(value);
                let index_ = data_assignment_document_type.indexOf(value.incoming_document_type);
                data_assignment_document_type_count.fill(data_assignment_document_type_count[index_] + 1, index_, index_ + 1);
            }  
        } 
    });

    let datasets_pie = [{
        label: "Số văn bản",
        data: data_assignment_document_type_count,
        backgroundColor: backgroundColorPie,
        hoverOffset: 4
    }];

    if (request.query.document_type){
        list_document = list_document.filter((value) => {
            return value.incoming_document_type == request.query.document_type;
        });
    }

    if (request.query.status){
        let flag;
        if (request.query.status == "Đang xử lý"){
            flag = false;
        } else {
            flag = true
        }
        
        list_document = list_document.filter((value) => {
            return value.isComplete == flag;
        });
    }

    list_document.forEach((value) => {
        let assignment = db.get("assignment").find({ incoming_document_id: value.id}).value();
        if (assignment){
            value.department = assignment.department_name;
        }
    });

    list_document.forEach((value) => {
        let assignment = db.get("assignment").find({ incoming_document_id: value.id}).value();
        if (assignment){
            value.employee_name = assignment.employee_name;
        }
    });

    response.render("statistics-manager", {
        query_start: query_start,
        query_end: query_end,
        labels: data_assignment,
        datasets: datasets,
        datasets_pie: datasets_pie,
        labels_pie: data_assignment_document_type,
        document_type: db.get("type_documents").value(),
        list_document: list_document,
        query: request.query
    });
};
