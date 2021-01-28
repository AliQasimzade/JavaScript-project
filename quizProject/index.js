const questionsData = [
  {
    question: "Who is the President of USA ?",
    a: "Donald Trump",
    b: "Joe Biden",
    c: "Barack Obama",
    correct: "b",
  },
  {
    question: "What does HTML stand for ?",
    a: "Cascading Style Sheet",
    b: "Java",
    c: "HyperText Markup Language",
    correct: "c",
  },
  {
    question: "What does CSS stand for ?",
    a: "Cascading Style Sheet",
    b: "HyperText Markup Language",
    c: "Python",
    correct: "a",
  },
  {
    question: "Is Javascript single thread ?",
    a: "No",
    b: "Yes",
    c: "None of them",
    correct: "b",
  },
  {
    question: "What is the best programming language in 2021 ?",
    a: "Java",
    b: "Python",
    c: "JavaScript",
    correct: "c",
  },
];

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const question = document.getElementById("question");
const nextAndSubmitBtn = document.getElementById("nextAndSubmitBtn");
const container = document.querySelector(".container");
const answerEls = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
  deSelected();
  question.innerText = questionsData[currentQuestion].question;
  a_text.innerText = questionsData[currentQuestion].a;
  b_text.innerText = questionsData[currentQuestion].b;
  c_text.innerText = questionsData[currentQuestion].c;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((item) => {
    if (item.checked) {
      answer = item.id;
    }
  });

  return answer;
}

function deSelected() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

nextAndSubmitBtn.addEventListener("click", () => {
  let answer = getSelected();

  if (answer == questionsData[currentQuestion].correct) {
    score++;
    console.log(score);
  }
  currentQuestion++;
  if (currentQuestion < questionsData.length) {
    loadQuestion();
    if (currentQuestion == 4) {
      nextAndSubmitBtn.innerHTML = "Submit";
    }
  } else {
    container.innerHTML = `
        <h3 style="padding: 20px; text-align: center;">Your correctly at score ${score}/${questionsData.length} questions</h3>
        <button onClick="location.reload()" style="width: 100%; background-color: red;">Reload</button>
        `;
  }
});
