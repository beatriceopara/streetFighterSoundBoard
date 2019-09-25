
var bisonAudio = document.getElementById("mBisonAudio");
var bisonButton = document.getElementById("mBisonButton");
bisonButton.addEventListener("click", function() {
  bisonAudio.currentTime = 0;
  bisonAudio.play("mBisonAudio");
});


var guileAudio = document.getElementById("guileAudio");
var guileButton = document.getElementById("guileButton");
guileButton.addEventListener("click", function() {
  guileAudio.currentTime = 0;
  guileAudio.play("guileAudio");
});
