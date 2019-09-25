
var bisonAudio = document.getElementById("mBisonAudio");
var bisonButton = document.getElementById("mBisonButton");
bisonButton.addEventListener("click", function() {
  bisonAudio.currentTime = 0;
  bisonAudio.play("mBisonAudio");
});
