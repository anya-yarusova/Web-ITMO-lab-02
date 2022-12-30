const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const radius = width / 2.5;
const arrow_size = 20;
const axes_color = '#8a7070';
const figure_color = '#40495d';
const mark_size = 30;

function draw_marks() {
    ctx.beginPath();
    ctx.fillStyle = axes_color;
    ctx.strokeStyle = axes_color;
    ctx.fillText('X', width - mark_size / 2, height / 2 - mark_size);
    ctx.fillText('Y', width / 2 + mark_size, mark_size / 2);
    ctx.fillText('-R', width / 2 - radius, height / 2 + mark_size + mark_size / 2);
    ctx.moveTo(width / 2 - radius, height / 2 + mark_size);
    ctx.lineTo(width / 2 - radius, height / 2 - mark_size);
    ctx.fillText('-R/2', width / 2 - radius / 2, height / 2 + mark_size + mark_size / 2);
    ctx.moveTo(width / 2 - radius / 2, height / 2 + mark_size);
    ctx.lineTo(width / 2 - radius / 2, height / 2 - mark_size);
    ctx.fillText('R/2', width / 2 + radius / 2, height / 2 + mark_size + mark_size / 2);
    ctx.moveTo(width / 2 + radius / 2, height / 2 + mark_size);
    ctx.lineTo(width / 2 + radius / 2, height / 2 - mark_size);
    ctx.fillText('R', width / 2 + radius, height / 2 + mark_size + mark_size / 2);
    ctx.moveTo(width / 2 + radius, height / 2 + mark_size);
    ctx.lineTo(width / 2 + radius, height / 2 - mark_size);
    ctx.fillText('R', width / 2 - mark_size - mark_size / 2, height / 2 - radius);
    ctx.moveTo(width / 2 - mark_size, height / 2 - radius);
    ctx.lineTo(width / 2 + mark_size, height / 2 - radius);
    ctx.fillText('R/2', width / 2 - mark_size - mark_size / 2, height / 2 - radius / 2);
    ctx.moveTo(width / 2 - mark_size, height / 2 - radius / 2);
    ctx.lineTo(width / 2 + mark_size, height / 2 - radius / 2);
    ctx.fillText('-R/2', width / 2 - mark_size - mark_size / 2, height / 2 + radius / 2);
    ctx.moveTo(width / 2 - mark_size, height / 2 + radius / 2);
    ctx.lineTo(width / 2 + mark_size, height / 2 + radius / 2);
    ctx.fillText('-R', width / 2 - mark_size - mark_size / 2, height / 2 + radius);
    ctx.moveTo(width / 2 - mark_size, height / 2 + radius);
    ctx.lineTo(width / 2 + mark_size, height / 2 + radius);
    ctx.stroke();
}

function draw_axes() {
    ctx.beginPath();
    ctx.fillStyle = axes_color;
    ctx.strokeStyle = axes_color;
    ctx.moveTo(width / 2, height);
    ctx.lineTo(width / 2, 0);
    ctx.lineTo(width / 2 - arrow_size, arrow_size);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2 + arrow_size, arrow_size);
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.lineTo(width - arrow_size, height / 2 - arrow_size);
    ctx.moveTo(width, height / 2);
    ctx.lineTo(width - arrow_size, height / 2 + arrow_size);
    ctx.stroke();
    draw_marks();
}

function draw_figure() {
    ctx.beginPath();
    ctx.fillStyle = figure_color;
    ctx.arc(width / 2, height / 2, radius / 2, 0,1.5*Math.PI, true);
    ctx.lineTo(width / 2, height / 2);
    ctx.fill();
    ctx.fillRect(width / 2 - radius, height / 2, radius, radius / 2);
    ctx.moveTo(width / 2, height / 2);
    ctx.lineTo(width / 2 + radius, height / 2);
    ctx.lineTo(width / 2, height / 2 + radius / 2);
    ctx.lineTo(width / 2, height / 2);
    ctx.fill();
}

function draw_graph() {
    ctx.clearRect(0, 0, width, height);
    draw_figure();
    draw_axes();
}

/*function draw_cursor(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_graph();
    ctx.beginPath();
    ctx.fillStyle = '#78cbef';
    ctx.arc(e.offsetX, e.offsetY, 3, 0, 2 * Math.PI);
    ctx.fill();
}*/

function draw_point(x, y, r, result) {
    // JS SUCKS
    const rad  =  parseFloat(r)
    const xXXXX = parseFloat(x)
    const a = (5 * rad / 2);
    console.log(width, height);
    const b = xXXXX + 1.25 * rad;
    console.log(b, width, a);
    const x_position = b * width / a;
    const y_position = (5 / 4 * rad - y) * height / a;
    console.log(x_position, y_position);

    console.log(x, y, a);
    console.log(result);
    console.log(x_position, y_position, r, rad);
    console.log(width, height);

    ctx.beginPath();
    ctx.moveTo(x_position, y_position);
    ctx.arc(x_position, y_position, 5, 0, 2 * Math.PI);
    if (result === "HIT") {
        ctx.fillStyle = '#708868';
    } else {
        ctx.fillStyle = '#986363';
    }
    ctx.fill();
}

document.querySelector('#graph').addEventListener('click', function (event) {
    const r = FIELD_R.val();
    const x_ = (event.offsetX / width) * (5 * r / 2) - (5 / 4) * r;
    const y_ =  - (event.offsetY / height) * (5 * r / 2) + (5 / 4) * r;
    click_on_canvas(x_, y_);
});


$(document).ready(function () {
    draw_graph();
});

