"use strict";

const startBtn = document.getElementById("start-btn");
const nameForm = document.getElementById("name-form");
const submitNameBtn = document.getElementById("submit-name");
const playerNameInput = document.getElementById("player-name");

document.getElementById("leaderboard-btn").addEventListener("click", () => {
  window.location.href = "pages/leaderboard.html";
});

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  nameForm.classList.remove("hidden");
});

submitNameBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();

  if (playerName === "") {
    alert("Please enter your name!");
    return;
  }

  localStorage.setItem("currentPlayer", playerName);

  // move to the quiz page
  window.location.href = "pages/quiz.html";
});
