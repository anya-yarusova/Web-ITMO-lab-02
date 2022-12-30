const numberPattern = new RegExp("^[+-]?([0-9]*[.,])?[0-9]+$");

function validate_y() {
    const y = FIELD_Y.val();
    if (y === "") {
        Y_ERROR.html("Y cannot be empty");
        FIELD_Y.addClass('error');
        return false;
    } else if (isNaN(parseFloat(y))) {
        Y_ERROR.html("Y must be a number");
        FIELD_Y.addClass('error');
        return false;
    } else if (!numberPattern.test(y)|| parseFloat(y) < -3 || parseFloat(y) > 5) {
        Y_ERROR.html("Y must be in range [-3; 5]");
        FIELD_Y.addClass('error');
        return false;
    } else {
        Y_ERROR.html("");
        FIELD_Y.removeClass('error');
        return true;
    }
}

function validate_r() {
    const r = FIELD_R.val();
    if (r === "") {
        R_ERROR.html("R cannot be empty");
        FIELD_R.addClass('error');
        return false;
    } else if (isNaN(parseFloat(r))) {
        R_ERROR.html("R must be a number");
        FIELD_R.addClass('error');
        return false;
    } else if (!numberPattern.test(r)|| parseFloat(r) < 2 || parseFloat(r) > 5) {
        R_ERROR.html("R must be in range [2; 5]");
        FIELD_R.addClass('error');
        return false;
    } else {
        R_ERROR.html("");
        FIELD_R.removeClass('error');
        return true;
    }
}

function validate() {
    return validate_y() && validate_r();
}
