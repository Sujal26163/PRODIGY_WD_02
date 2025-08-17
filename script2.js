let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;

document.getElementById("startStop").addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
  } else {
    timer = setInterval(run, 1000);
    document.getElementById("startStop").textContent = "Pause";
  }
  isRunning = !isRunning;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  hours = minutes = seconds = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("laps").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  if (isRunning) {
    const lapTime = document.getElementById("display").textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);
  }
});

function run() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("display").textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}
