"use strict";

// here we are listening for the DOMContentLoaded event to ensure that the HTML is fully loaded before we try to access any elements in it
// and we are using the localStorage API to retrieve the leaderboard data from local storage
document.addEventListener("DOMContentLoaded", () => {
  const leaderboardList = document.getElementById("leaderboard-list");
  const scores = JSON.parse(localStorage.getItem("leaderboard")) || [];

  if (scores.length === 0) {
    leaderboardList.innerHTML = "<li>No scores yet!</li>";
  } else {
    const sortedScores = scores.sort((a, b) => b.score - a.score);
    leaderboardList.innerHTML = sortedScores
      .map((score) => `<li>${score.name} - ${score.score}</li>`)
      .join("");
  }
});
