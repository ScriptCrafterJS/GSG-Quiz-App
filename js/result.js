"use strict";

const scoreDisplay = document.getElementById("score-display");
const message = document.getElementById("message");

const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
const currentPlayer = localStorage.getItem("currentPlayer") || "Anonymous";
const playerData = leaderboard.find((player) => player.name === currentPlayer);

if (playerData) {
  scoreDisplay.textContent = `${currentPlayer}, you scored ${playerData.score}/10`;

  if (playerData.score === 10) {
    message.textContent = "🎉 Perfect Score! You're a legend!";
  } else if (playerData.score >= 7) {
    message.textContent = "🔥 Great job!";
  } else if (playerData.score >= 4) {
    message.textContent = "🙂 Not bad! Try again to beat your score.";
  } else {
    message.textContent = "😅 Better luck next time!";
  }
} else {
  scoreDisplay.textContent = "No score found.";
  message.textContent = "";
}
