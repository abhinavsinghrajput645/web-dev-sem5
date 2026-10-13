const MIN_DURATION = 5;
const MAX_DURATION = 60;
const DURATION_STEP = 5;

const display = document.querySelector("#timer-display");
const face = document.querySelector("#timer-face");
const caption = document.querySelector("#timer-caption");
const durationLabel = document.querySelector("#duration-label");
const startButton = document.querySelector("#start-button");
const startButtonLabel = document.querySelector("#start-button-label");
const shorterButton = document.querySelector("#shorter-button");
const longerButton = document.querySelector("#longer-button");
const resetButton = document.querySelector("#reset-button");
const taskInput = document.querySelector("#task-input");
const announcement = document.querySelector("#session-announcement");

let durationMinutes = 25;
let remainingSeconds = durationMinutes * 60;
let intervalId = null;
let endTime = null;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;
}

function render() {
  display.textContent = formatTime(remainingSeconds);
  face.style.setProperty("--progress", `${((durationMinutes * 60 - remainingSeconds) / (durationMinutes * 60)) * 100}%`);
  face.setAttribute("aria-label", `${formatTime(remainingSeconds)} remaining`);
  durationLabel.textContent = `${durationMinutes} MIN`;
  shorterButton.disabled = intervalId !== null || durationMinutes <= MIN_DURATION;
  longerButton.disabled = intervalId !== null || durationMinutes >= MAX_DURATION;
}

function stopTimer() {
  window.clearInterval(intervalId);
  intervalId = null;
  endTime = null;
}

function completeSession() {
  stopTimer();
  remainingSeconds = 0;
  caption.textContent = "SESSION COMPLETE";
  startButtonLabel.textContent = "Start another";
  announcement.textContent = taskInput.value.trim()
    ? `Focus session complete. You worked on ${taskInput.value.trim()}.`
    : "Focus session complete.";
  render();
}

function tick() {
  remainingSeconds = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
  if (remainingSeconds === 0) {
    completeSession();
    return;
  }
  render();
}

function startTimer() {
  if (intervalId !== null) {
    stopTimer();
    caption.textContent = "TAKE YOUR TIME";
    startButtonLabel.textContent = "Resume focusing";
    render();
    return;
  }

  if (remainingSeconds === 0) {
    remainingSeconds = durationMinutes * 60;
  }

  endTime = Date.now() + remainingSeconds * 1000;
  caption.textContent = taskInput.value.trim() ? "ONE THING AT A TIME" : "YOU'RE IN THE FLOW";
  startButtonLabel.textContent = "Pause session";
  announcement.textContent = "Focus session started.";
  intervalId = window.setInterval(tick, 250);
  render();
}

function resetTimer() {
  stopTimer();
  remainingSeconds = durationMinutes * 60;
  caption.textContent = "READY WHEN YOU ARE";
  startButtonLabel.textContent = "Start focusing";
  announcement.textContent = "Session reset.";
  render();
}

function changeDuration(change) {
  if (intervalId !== null) {
    return;
  }
  durationMinutes = Math.min(MAX_DURATION, Math.max(MIN_DURATION, durationMinutes + change));
  remainingSeconds = durationMinutes * 60;
  caption.textContent = "READY WHEN YOU ARE";
  startButtonLabel.textContent = "Start focusing";
  render();
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
shorterButton.addEventListener("click", () => changeDuration(-DURATION_STEP));
longerButton.addEventListener("click", () => changeDuration(DURATION_STEP));

render();
