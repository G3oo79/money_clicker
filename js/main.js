document.getElementById("text").innerHTML = "this is a text";
document.getElementById("hello").innerHTML = "hello world";
document.getElementById("calc").innerHTML = 5 + 5;

 function showAlertBox() {
   alert("display message");
 }

 function displayName(name) {
   alert("This is my name: " + name);
 }

 function showMessage() {
   console.log("show message");
 }
 function theSumOfNumbers() {
   var number_one = 6;
   var number_two = 5;
   var total = number_one + number_two;
   alert("The total sum of numbers are: " + total);
 }

function multiply(a, b) {
  var result;
  var result = a * b;

  alert("Result: " + result);
}

//Arithmetic operators
//addion "+"
//subtraction "-"
//multiplication "*"
//division "/"
//modulus(remainder) "%"
//increment "++"
//decrement "--"

function incrementNumber() {
  var a = 2;
  a++;
  alert(a);
}

function decrementNumber() {
  var b = 3;
  b--;
  alert(b);
}

function divide(c, d) {
  var total;
  total = c / d;
  alert("Result: " + total);
}

function remainder() {
  var a = 5;
  var remain;
  remain = a % 2;
  alert("Total: " + remain);
}
