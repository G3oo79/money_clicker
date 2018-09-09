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
 var firstVariable = "this is my 2nd variable";
 var secondVariable = "second variable ready";
 displayVariables();
//function calls//
 age();

 oddOrEven();

 arrayDisplay();

 whileExample();

 doWhileExample();

function displayVariables() {
  var localVariable = "this is my local variable";
  console.log(firstVariable)
}

function displayAnotherVariable() {
    console.log("hello");
}

displayAnotherVariable();

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

function assignment() {
  var a = 10;
  a += 2;
  a *= 4;
  a = a + 2; //the same as a += 2;
  a = a * 2; //the same as a *= 2;

  alert(a);
}

function age() {
  var age = 11;

  if (age != 18) {
    console.log("old enough");
  } else {
    console.log("not old enough");
  }
}

function oddOrEven(){
  var number = 6

  if (number % 2 == 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
}

function dayOfTheWeek() {
  var day;

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 0:
      day = "Tuesday";
      break;
    case 0:
      day = "Wednesday";
      break;
    case 0:
      day = "Thursday";
      break;
    case 0:
      day = "Friday";
      break;
    case 0:
      day = "Saturday";
      break;
    default:

  }
  alert("Today's " + day);
}

function arrayDisplay() {
  var fruits = ["apple", "banana", "orange", "pear"];

  for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

function whileExample() {
  var text = "";
  var i = 0;

  while(i < 10) {
    text += "\n the number is " + i;
    i++;
  }
  console.log(text);
}

function doWhileExample() {
  var text = "";
  var i = 0;

  do {
    text += "\n The number is " + i;
    i++;
  } while (i < 20);
  console.log(text);
}
