$(document).ready(function () {

var counter = 0;

$("#counter").text(counter);

$("#add").click(function () {
counter = counter + 1;
$("#counter").text(counter);
});

$("#subtract").click(function () {
counter = counter - 1;
$("#counter").text(counter);
});

$("#reset").click(function () {
counter = 0;
$("#counter").text(counter);
});
});

