"use strict";

// here we are listening for the DOMContentLoaded event to ensure that the HTML is fully loaded before we try to access any elements in it
// and we are using the localStorage API to retrieve the leaderboard data from local storage
document.addEventListener("DOMContentLoaded", () => {
  const leaderboardList = document.getElementById("leaderboard-list");
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

  if (leaderboard.length === 0) {
    leaderboardList.innerHTML = "<li>No scores yet!</li>";
  } else {
    // Sort leaderboard in descending order by score
    const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score);

    // Generate HTML for leaderboard
    leaderboardList.innerHTML = sortedLeaderboard
      .map((player, index) => {
        return `
          <li class="leaderboard-entry" >
            <span class="player-name">${player.name}</span>
            <span class="player-score">${player.score}</span>
          </li>
        `;
      })
      .join("");
  }
});
