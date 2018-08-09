$(document).ready(function () {

<<<<<<< HEAD
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
=======
var counterep = 20;
var counter = 0;
var counterdex = 0;
var counterwis = 0;
var counteragi = 0;

console.log(counterep);

$("#counterep").text(counterep);

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


$("#counterdex").text(counterdex);

$("#adddex").click(function () {
counterdex = counterdex + 1;
$("#counterdex").text(counterdex);
});

$("#subtractdex").click(function () {
counterdex = counterdex - 1;
$("#counterdex").text(counterdex);
});

$("#resetdex").click(function () {
counterdex = 0;
$("#counterdex").text(counterdex);
});


$("#counterwis").text(counterwis);

$("#addwis").click(function () {
counterwis = counterwis + 1;
$("#counterwis").text(counterwis);
});

$("#subtractwis").click(function () {
counterwis = counterwis - 1;
$("#counterwis").text(counterwis);
});

$("#resetwis").click(function () {
counterwis = 0;
$("#counterwis").text(counterwis);
});

$("#counteragi").text(counteragi);

$("#addagi").click(function () {
counteragi = counteragi + 1;
$("#counteragi").text(counteragi);
});

$("#subtractagi").click(function () {
counteragi = counteragi - 1;
$("#counteragi").text(counteragi);
});

$("#resetagi").click(function () {
counteragi = 0;
$("#counteragi").text(counteragi);
});

var x = myFunction();    // Function is called, return value will end up in x

function myFunction(counter, counteragi, counterdex, counterwis) {
    return counter + counteragi + counterdex + counterwis;            // Function returns the product of a and b
}
console.log(x);
>>>>>>> fd0ec6696a2cfb6b8f6dd37173907732ac2079a5
});

