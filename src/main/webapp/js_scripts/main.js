function submit_form() {
    if (validate()) {
        $.get('ControllerServlet', {
            x: FIELD_X.val(),
            y: FIELD_Y.val(),
            r: FIELD_R.val(),
            fromG: false
        }, function (data) {
            if (data !== 'Data is not valid') {
                console.log(data);
                update_table(data);
            } else {
                alert(data);
            }
        });
    } else {
        alert('Data is not valid');
    }
}

function click_on_canvas(x, y) {
    if (validate_r()) {
        const r = parseFloat(FIELD_R.val());
        console.log(x, y);
        $.get('ControllerServlet', {
            x: x,
            y: y,
            r: r,
            fromG: true
        }, function (data) {
            if (data !== 'Data is not valid') {
                console.log(data);
                update_table(data);
            } else {
                alert(data);
            }
        });
    } else {
        alert('R is not valid');
    }
}
