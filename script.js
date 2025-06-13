const startBtn = document.getElementById("startBtn");
const audio = document.getElementById("rainAudio");
const poemLines = document.querySelectorAll("#poemLines .line");
const poemBox = document.getElementById("poemLines");

let started = false;
let currentLine = 0;

startBtn.addEventListener("click", () => {
  if (!started) {
    audio.play();
    poemBox.classList.remove("hidden");
    started = true;
  }
  showNextLine();
});

function showNextLine() {
  if (currentLine < poemLines.length) {
    const line = poemLines[currentLine];
    line.classList.remove("hidden");
    line.classList.add("fade-in");
    currentLine++;

    if (currentLine === poemLines.length) {
      setTimeout(() => startBtn.style.display = "none", 1000); // Son satırdan sonra butonu gizle
    }
  }
}
