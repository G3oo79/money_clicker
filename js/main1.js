//Write a JavaScript program where the program takes a random integer between 1 to 10.
//the user is prompted to input a guess number.
//if the input matches with guess number the program will display "You guessed the number"
//other wise "You did not guess the number. the number was:" then display real number.

//hint1: use Math.random() to generate a random number.
//hint2: the Math.random() will generate a random number between o and 1
//hint3: use Math.ceil() to round the number generated to be an integer.
//hint4:Use "prompt" to display a prompt box.


//=====================Excersise #1===============

// areaSquare(4);
// function areaSquare(side) {
//   var area = side * side;
//   alert(area);
// }

//=====================Exercse #2================

//function findInteger() {
  //var number = Math.ceil(Math.random() * 10);
  //var guess_number = prompt("Guess the number from 1 to 10 ")

  //if (guess_number == number) {
    //alert("you guessed the number");
  //} else {
    //alert("You did not guess!!! the correct number is: " + number);
  //}

//}
//======================Exercise #3================

// function changeImg() {
//   var image = document.getElementById("myImage");
//   var bodyElement = document.body;
//
//   if (image.src.match("sun")) {
//     image.src="images/moon.jpg";
//
//     bodyElement.classList.add("night");
//     bodyElement.classList.remove("day");
//   } else {
//     image.src="images/sun.png";
//     bodyElement.classList.remove("night");
//     bodyElement.classList.add("day");
//   }
//
//   }

//======================Exercise #4=====================
// findInteger();
//
// function findInteger() {
//
//   for (var i = 0; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log(i + " multiple of three and five");
//     } else if(i % 3 == 0){
//       console.log(i + " multiples of three");
//     } else if (i % 5 == 0) {
//       console.log(i + " multiples of five");
//     } else {
//       console.log(i);
//     }
//   }
// }
passwordGenerator(12);

function passwordGenerator(no_digits) {
  var generatedPassword = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < no_digits; i++) {
    generatedPassword += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
console.log(generatedPassword);
}
