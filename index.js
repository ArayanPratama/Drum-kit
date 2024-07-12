var numberOfDrum = document.querySelectorAll(".drum").length;
const listOfSounds = [
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
  "snare.mp3",
  "crash.mp3",
  "kick-bass.mp3",
];
//detecting mouse click
var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
   document.querySelectorAll(".drum")[i].addEventListener(
      "click",
      (function (i) {
         return function () {
            var audio = new Audio("sounds/" + listOfSounds[i]);
            audio.play();
         };
      })(i)
   );
}

//detecting button press
document.addEventListener("keypress", function (e) {
   makeSound(e.key);
});
//detecting keyboard press
function makeSound(kunci) {
  switch (kunci) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    default:
      alert(kunci + " Is not defined!!!")
      break;
  }
}
