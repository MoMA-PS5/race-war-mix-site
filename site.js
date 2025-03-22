function alternateCapsSkipSpaces(text) {
  let result = "";
  let upper = false; // Start with lowercase
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      result += " "; // Keep spaces as is
    } else {
      if (upper) {
        result += text[i].toUpperCase();
      } else {
        result += text[i].toLowerCase();
      }
      upper = !upper; // Toggle case for next non-space character
    }
  }
  return result;
}

const togglePlayPauseButton = document.getElementById("togglePlayPause");
const mysticTribeAiUrl = "./38804_B1.mp3";

const audio = new Audio(mysticTribeAiUrl);
audio.crossOrigin = "anonymous"; // Enable CORS
audio.loop = true; // Enable looping

togglePlayPauseButton.addEventListener("click", function() {
  if (this.classList.contains("play")) {
    this.classList.remove("play");
    this.classList.add("pause");
    audio.play(); // Play audio
  } else {
    this.classList.remove("pause");
    this.classList.add("play");
    audio.pause(); // Pause audio
  }
});
