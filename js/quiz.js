"use strict";

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const questionCount = document.getElementById("question-count");

let currentQuestionIndex = 0;
let score = 0;
let questions = JSON.parse(localStorage.getItem("questions")) || [];
const totalQuestions = 10;

// randomize and slice 10 questions
questions = questions.sort(() => 0.5 - Math.random()).slice(0, totalQuestions);

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionText.textContent = current.question;
  questionCount.textContent = `${currentQuestionIndex + 1}/${totalQuestions}`;
  optionsContainer.innerHTML = "";

  current.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => selectAnswer(btn, current.answer));
    optionsContainer.appendChild(btn);
  });

  nextBtn.classList.add("hidden");
}

function selectAnswer(button, correctAnswer) {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
  });

  if (button.textContent === correctAnswer) {
    score++;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    loadQuestion();
  } else {
    // Save score and redirect to result
    const playerName = localStorage.getItem("currentPlayer") || "Anonymous";
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({ name: playerName, score });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    window.location.href = "/result.html";
  }
});

// Initial load
loadQuestion();
