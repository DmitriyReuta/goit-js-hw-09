const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop');
let timerInterval = null;
startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
});
stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerInterval);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}