$(document).ready(function () {

  var counter = 0;
  var counterep = 20;
  var counter = 0;
  var counterdex = 0;
  var counterwis = 0;
  var counteragi = 0;

  $("#counterep").text(counterep);

  $("#counter").text(counter);

  $("#counterdex").text(counterdex);

  $("#add").click(function () {


    if(counterep !== 0){
      counter = counter + 1;
      counterep = counterep -1;    
    }
    $("#counterep").text(counterep);
    $("#counter").text(counter);
  });

  $("#subtract").click(function () {

    if(counter !== 0){
      counter = counter - 1;
      counterep = counterep + 1;    
    }
    $("#counterep").text(counterep);
    $("#counter").text(counter);
  });

  $("#reset").click(function () {
    counter = 0;
    $("#counter").text(counter);
  });


console.log(counterep);



$("#adddex").click(function () {
  if(counterep !== 0){
    counterdex = counterdex + 1;
    counterep = counterep -1;    
  }
  $("#counterep").text(counterep);
$("#counterdex").text(counterdex);
});

$("#subtractdex").click(function () {
    if(counterdex !== 0){
      counterdex = counterdex - 1;
      counterep = counterep + 1;}
      $("#counterep").text(counterep);
      $("#counterdex").text(counterdex);
});

$("#resetdex").click(function () {
counterdex = 0;
$("#counterdex").text(counterdex);
});


$("#counterwis").text(counterwis);

$("#addwis").click(function () {
  if(counterep !== 0){
    counterwis = counterwis + 1;
    counterep = counterep -1;    
  }
  $("#counterep").text(counterep);
$("#counterwis").text(counterwis);
});

$("#subtractwis").click(function () {
    if(counterwis !== 0){
      counterwis = counterwis - 1;
      counterep = counterep + 1;}
      $("#counterep").text(counterep);
$("#counterwis").text(counterwis);
});

$("#resetwis").click(function () {
counterwis = 0;
$("#counterwis").text(counterwis);
});

$("#counteragi").text(counteragi);

$("#addagi").click(function () {
  if(counterep !== 0){
    counteragi = counteragi + 1;
    counterep = counterep -1;    
  }
  $("#counterep").text(counterep);
$("#counteragi").text(counteragi);
});

$("#subtractagi").click(function () {
    if(counteragi !== 0){
      counteragi = counteragi - 1;
      counterep = counterep + 1;}
      $("#counterep").text(counterep);
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
});

