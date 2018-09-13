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

// passwordGenerator(12);
//
// function passwordGenerator(no_digits) {
//   var generatedPassword = "";
//   var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//
//   for (var i = 0; i < no_digits; i++) {
//     generatedPassword += char_list.charAt(Math.floor(Math.random() * char_list.length));
//   }
// console.log(generatedPassword);
// }

//=======================Exercise #5====================

///This is my way but it is not correct need to be more specific!!!!....
// weekend();
// function weekend() {
//   var day;
//   var weekend;
//
//   switch (new Date().getDay()) {
//     case 0:
//     day = "Sunday"
//       weekend = "tomorrow monday buuhhh";
//       break;
//     case 1:
//     day = "Monday"
//       weekend = "not the weekend";
//       break;
//     case 2:
//     day = "Tuesday"
//       weekend = "not the weekend";
//       break;
//     case 3:
//     day = "Wednesday"
//       weekend = "not the weekend";
//       break;
//     case 4:
//     day = "Thursday"
//       weekend = "not the weekend";
//       break;
//     case 5:
//     day = "Friday"
//       weekend = "hoy se bebeeee";
//       break;
//     case 6:
//     day = "Saturday"
//       weekend = "Yeeeyy The weekend here";
//       break;
//     default:
//
//   }
//   console.log(day, weekend);
// }

//===============Same exercise (#5) different aproach.......
weekend("September 14, 2018");

function weekend(inputDate) {
  var dayOfWeek = new Date(inputDate).getDay();

  if (dayOfWeek == 6 || dayOfWeek == 0) {
    console.log(inputDate + " Yeeeeey the weekend is here");
  } else if(dayOfWeek == 5) {
    console.log(inputDate + " Hooooyy se beeebeeeeee");
  } else {
    console.log(inputDate + " Noooo is work day");
  }
}
