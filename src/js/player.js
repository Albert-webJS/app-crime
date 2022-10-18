const trigger = document.querySelector(".crime__box-btn");
const play = document.querySelector(".crime__play");
const pause = document.querySelector(".crime__pause");
export const range = document.querySelector(".chart__range");

let timer;

function timeInterval() {
  let value = Number(range.value);
  timer = setInterval(() => {
    range.value = value += 1;
    range.dispatchEvent(new Event("change"));
  }, 1000);
}

export function keyDownListener() {
  trigger.addEventListener("keydown" || "click", (event) => {
    if (event.code === "Enter" && !play.classList.contains("hidden")) {
      play.classList.add("hidden");
      pause.classList.add("show");
      timeInterval();
    } else {
      play.classList.remove("hidden");
      pause.classList.remove("show");
      clearInterval(timer);
    }
  });
}

export function startPlayer() {
  trigger.addEventListener("click", function () {
    if (!play.classList.contains("hidden")) {
      play.classList.add("hidden");
      pause.classList.add("show");
      timeInterval();
    } else {
      play.classList.remove("hidden");
      pause.classList.remove("show");
      clearInterval(timer);
    }
  });
}
