function select_field(field, value, filed_name) {
    if (field.val() === value) {
        field.val("");
        $('#' + filed_name + value).removeClass('selected');
    } else {
        if (field.val() !== "") {
            $('#' + filed_name + field.val()).removeClass('selected');
        }
        field.val(value);
        $('#' + filed_name + value).addClass('selected');
    }
}