"use strict";
const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const again = document.querySelector(".again");
const display = document.querySelector(".display");

let correctNumber = Math.trunc(Math.random() * 100) + 1;

console.log(correctNumber);

let sco = 20;
let high = 0;

const dMessage = function (mess) {
  message.textContent = mess;
};

check.addEventListener("click", function () {
  const input = Number(guess.value);

  if (!input) {
    dMessage("Input a Number");
  } else if (input === correctNumber) {
    dMessage("🥰 Correct Number");
    high = sco;
    highscore.textContent = high;
    display.textContent = correctNumber;
  } else if (input !== correctNumber) {
    if (sco > 1) {
      dMessage(
        input > correctNumber ? "Close! Go Lower ⬇️" : "Close! Go Higher ⏫"
      );
      sco--;
      score.textContent = sco;
    } else {
      dMessage("😡 Game Over");
      sco = 0;
      score.textContent = sco;
    }
  }
});

again.addEventListener("click", function () {
  sco = 20;
  score.textContent = sco;
  guess.value = "";
  correctNumber = Math.trunc(Math.random() * 100) + 1;
});
