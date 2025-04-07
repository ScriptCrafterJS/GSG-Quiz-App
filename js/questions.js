"use strict";

const defaultQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What year was JavaScript created?",
    options: ["1996", "1995", "1994", "2000"],
    answer: "1995",
  },
  {
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<em>", "<b>", "<important>"],
    answer: "<strong>",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Apple", "Google"],
    answer: "Netscape",
  },
  {
    question: "Which tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "Hyper Trainer Text Protocol",
      "HyperText Transfer Protocol",
      "HighText Transfer Protocol",
      "Hyper Transfer Text Process",
    ],
    answer: "HyperText Transfer Protocol",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>",
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.objectify()",
      "JSON.convert()",
    ],
    answer: "JSON.parse()",
  },
];

// Only store if not already in localStorage
if (!localStorage.getItem("questions")) {
  localStorage.setItem("questions", JSON.stringify(defaultQuestions));
}
