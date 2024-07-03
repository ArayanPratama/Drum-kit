   var numberOfDrum = document.querySelectorAll(".drum").length;
   const listOfSounds = [  
   "tom-1.mp3",
   "tom-2.mp3",
   "tom-3.mp3",
   "tom-4.mp3",
   "snare.mp3",
   "crash.mp3",
   "kick-bass.mp3",
   ]
   
   for (var i = 0; i < numberOfDrum; i++) {
      document.querySelectorAll(".drum")[i].addEventListener("click", (function(i) {
         return function() {
            var audio = new Audio("sounds/"+listOfSounds[i]);
            audio.play();
         }
      })(i));
   }