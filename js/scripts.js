var addition = function(num1, num2) {
  return num1+num2;
};

var subtract = function(num1, num2) {
  return num1-num2;
};

var multiply = function(num1,num2) {
  return num1*num2
};

var divide = function(num1,num2) {
  return num1/num2
};

var exponent = function(num1, num2) {
  return Math.pow(num1,num2);
}

var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));

// alert(add(num1,num2));
// alert(subtract(num1,num2));
// alert(multiply(num1,num2));
// alert(divide(num1,num2));
// alert(exponent(num1,num2));

$(document).ready(function() {
  $("button#addition").click(function() {
    $(".displayResult").append(addition(num1,num2));
  });
});




