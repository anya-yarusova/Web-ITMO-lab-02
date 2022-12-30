<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"  language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lab_02</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
    <script type="text/javascript" charset="utf8"
            src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        :root {
            font-size: 20px;
            font-family: sans-serif;
            background-color: #0c1116;
        }
        .canvas {
            padding-top: 15px;
            padding-left: 15px;
        }
        canvas {
            background: #161a23;
            font-size: 30px;
            padding-left: 0;
            padding-right: 0;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 10px;
            outline: 2px solid #1e232f;
        }
        header {
            font-size: 20px;
            font-family: sans-serif;
            background-color: #161a23;
            overflow: hidden;
        }
        header h1 {
            font-size: 40px;
            color: #bac3cb;
            padding-left: 50px;
        }
        header h2 {
            font-size: 30px;
            color: #a3abb1;
            padding-left: 50px;
        }
        header h1::after {
            color: transparent;
            content: " | Group: P32151";
            transition-property: color;
            transition-duration: 0.5s;
        }
        header h1:hover::after {
            color: #a3abb1;
        }

        .table {
            display: flex;
            justify-content: center;
            width: 1000px;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 40px;
        }

        .dataTables_wrapper {
            width : 1000px;
        }
        thead {
            padding-bottom: 10px;
            font-weight: bold;
        }

        tbody {
            font-weight: 400;
        }

        th, td {
            padding: 10px 10px;
            color: #bac3cb;
        }

        .value_picker_field {
            padding: 5px 0px;
        }

        .value_picker_element {
            background: #0c1116;
            border-radius: 5px;
            border-width: 2px;
            border-color: #1e232f;
            outline: none;
        }
        .limitations {
            color: #e3817d;
            padding-left: 15px;
        }

        input.value_picker_element {
            color: #bac3cb;
            width: 250px;
            padding: 10px;
        }
        input {
            color: #000000;
            padding: 10px;
            background: #bac3cb;
            border-radius: 10px;
            border: 2px solid #2d3341;
        }
        input.input_r:focus, input.input_y:focus {
            background: #f5f8fa;
        }

        input.button_animation:hover {
            background: #268edc;
        }

        .buttons {
            padding-top: 40px;
        }

        label {
            color: #bac3cb;
        }

        .x-button {
            width: 30px;
            height: 30px;
            border: 2px solid #1e232f;
            background: #bac3cb;
            border-radius: 10px;
            color: #000000;
        }


        main {
            margin-left: 50px;
        }

        .value_picker {
            padding-top: 130px;
            padding-left : 130px;
        }

        #error_r_message, #error_y_message {
            color: #e3817d;
            padding-left: 15px;
        }

        .x-button:hover {
            background: #7fa9c9;
        }

        .button_animation {
            padding: 10px 25px;
            font-size: 20px;
            background: #0c1116;
            outline: none;
            border-radius: 10px;
            border: 2px solid #1e232f;
            transition: 0.3s;
            color: #bac3cb;
        }
        select {
            color : #bac3cb;
        }

        option {
            color :#bac3cb;
            background: #0c1116;
        }

        .selected {
            background: #268edc;
        }

    </style>
</head>
<header>
    <h1>Yarusova Anna</h1>
    <h2>Var: 12333</h2>
</header>
<body>
    <div class="canvas" style="display: inline-block; vertical-align:top">
    <canvas id="graph" width="390" height="390"></canvas>
    </div>
    <div class="value_picker" style="display: inline-block">
        <form class="form_frame" onsubmit="submit_form(); return false">
            <div class="value_picker_field">
                <p class="value_picker_field_x">
                    <label for="x_value">X</label>
                    <button type="button" class="x-button" id="x-4" onclick="select_field(FIELD_X, '-4', 'x')">
                        -4
                    </button>
                    <button type="button" class="x-button" id="x-3" onclick="select_field(FIELD_X, '-3', 'x')">
                        -3
                    </button>
                    <button type="button" class="x-button" id="x-2" onclick="select_field(FIELD_X, '-2', 'x')">
                        -2
                    </button>
                    <button type="button" class="x-button" id="x-1" onclick="select_field(FIELD_X, '-1', 'x')">
                        -1
                    </button>
                    <button type="button" class="x-button" id="x0" onclick="select_field(FIELD_X, '0', 'x')">
                        0
                    </button>
                    <button type="button" class="x-button" id="x1" onclick="select_field(FIELD_X, '1', 'x')">
                        1
                    </button>
                    <button type="button" class="x-button" id="x2" onclick="select_field(FIELD_X, '2', 'x')">
                        2
                    </button>
                    <button type="button" class="x-button" id="x3" onclick="select_field(FIELD_X, '3', 'x')">
                        3
                    </button>
                    <button type="button" class="x-button" id="x4" onclick="select_field(FIELD_X, '4', 'x')">
                        4
                    </button>
                    <input type="hidden" name="input_x" id="x_value">
                    <label for="x_value" class="limitations"> Default: 0</label>
                </p>
            </div>
            <div class="value_picker_field">
                <p class="value_picker_field_y">
                    <label for="y_value">Y</label>
                    <input type="text" name="y_value" id="y_value" class="input_y" placeholder=" -3" oninput="validate_y()">
                    <label id="error_y_message">Y must be in range [-3; 5]</label>
                </p>
            </div>
            <div class="value_picker_field">
                <p class="value_picker_field_r">
                    <label for="r_value">R</label>
                    <input type="text" name="r_value" id="r_value" class="input_r" placeholder=" 2" oninput="validate_r()">
                    <label id="error_r_message">R must be in range [2; 5]</label>
                </p>
            </div>
            <p class="buttons">
                <input class="button_animation" id="reset" type="reset" value="reset" onclick="reset_values()">
                <input class="button_animation" id="submit" type="submit" value="send">
                <input class = "button_animation" id="clear" type="reset" value="clear" onclick="clear_table()">
            </p>
        </form>
    </div>
    <div class="table">
        <table id="result_table" class="results">
            <thead>
            <tr><th>X</th><th>Y</th><th>R</th><th>Result</th><th>Time</th><th>Script time</th></tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</body>
<script src="js_scripts/main.js"></script>
<script src="js_scripts/constants.js"></script>
<script src="js_scripts/validate.js"></script>
<script src="js_scripts/reset.js"></script>
<script src="js_scripts/clear.js"></script>
<script src="js_scripts/select_field.js"></script>
<script src="js_scripts/draw_graph.js"></script>
<script src="js_scripts/results.js"></script>
</html>
