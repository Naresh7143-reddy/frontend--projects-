
    // Quiz questions
    const questions = [
      {
        question: "Which language is used for web styling?",
        answers: [
          { text: "HTML", correct: false },
          { text: "CSS", correct: true },
          { text: "Python", correct: false },
          { text: "Java", correct: false }
        ]
      },
      {
        question: "Which tag is used for JavaScript?",
        answers: [
          { text: "<script>", correct: true },
          { text: "<js>", correct: false },
          { text: "<javascript>", correct: false },
          { text: "<code>", correct: false }
        ]
      },
      {
        question: "What does CSS stand for?",
        answers: [
          { text: "Creative Style System", correct: false },
          { text: "Cascading Style Sheets", correct: true },
          { text: "Computer Styling Syntax", correct: false },
          { text: "Control Style Sheet", correct: false }
        ]
      }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
    }

    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
      });
    }

    function resetState() {
      nextButton.style.display = "none";
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

    function selectAnswer(e) {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.style.background = "linear-gradient(135deg, #56ab2f, #a8e063)";
        score++;
      } else {
        selectedBtn.style.background = "linear-gradient(135deg, #ff416c, #ff4b2b)";
      }

      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.style.background = "linear-gradient(135deg, #56ab2f, #a8e063)";
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
    }

    function showScore() {
      resetState();
      questionElement.innerHTML = `🎉 You scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
    }

    function handleNextButton() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }

    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < questions.length) {
        handleNextButton();
      } else {
        startQuiz();
      }
    });

    startQuiz();

