function reset_values() {
    $('#x' + FIELD_X.val()).removeClass('selected');
    FIELD_X.val("");
    FIELD_Y.removeClass('error');
    Y_ERROR.html("Y must be in range [-3; 5]");
    FIELD_R.removeClass('error');
    R_ERROR.html("R must be in range [2; 5]");
}