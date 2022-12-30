var results =[];
let obj;

$(document).ready(function () {
    obj = $("#result_table").DataTable();
    $.get('ControllerServlet', {
        loadData : "true"
    }, function (data) {
        update_table(data);
        console.log(results.length);
        for (let i = 0; i < results.length; i++) {
            console.log(results[i][3]);
            draw_point(results[i][0], results[i][1], results[i][2], results[i][3]);
        }
    });
})

function update_table(data) {
    obj.destroy();
    let arr = data.split("%");
    results = [];
    for (let i = 1; i < arr.length; i++) {
        results.unshift(arr[i].split("*"));
    }
    console.log(results);
    obj = $('#result_table').DataTable({
        data: results,
        columns: [
            {title: 'X',},
            {title: 'Y',},
            {title: 'R',},
            {title: 'Result',},
            {title: 'Time',},
            {title: 'Script time',},
        ],
    })
    for (let i = 0; i < results.length; i++) {
        console.log(results[i][3]);
        draw_point(results[i][0], results[i][1], results[i][2], results[i][3]);
    }

}