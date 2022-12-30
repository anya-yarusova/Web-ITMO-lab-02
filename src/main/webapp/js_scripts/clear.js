function clear_table() {
    obj = $("#result_table").DataTable();
    $.get('ClearServlet', {
    }, function (data) {
        update_table(data);
        draw_graph();
    });
}