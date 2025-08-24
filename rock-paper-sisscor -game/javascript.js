let userscore = 0;
let computerscore = 0;

// Select elements
const choicelist = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScoreBoard = document.getElementById("userscore");
const computerScoreBoard = document.getElementById("ComputerScore");
const resetBtn = document.getElementById("resetBtn");

// User choice
choicelist.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.id.toLowerCase(); 
    let computerchoice = comp();
    playgame(userchoice, computerchoice);
  });
});

// Computer choice
function comp() {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
}

// Game logic
function playgame(userchoice, computerchoice) {
  if (userchoice === computerchoice) {
    msg.innerText = `It's a Draw 🤝 (Computer chose ${computerchoice})`;
    msg.style.backgroundColor = "blue";
    msg.style.color = "white";
    return;
  }

  let userwin = false;
  if (userchoice === "rock") {
    userwin = computerchoice === "scissor";
  } else if (userchoice === "paper") {
    userwin = computerchoice === "rock";
  } else if (userchoice === "scissor") {
    userwin = computerchoice === "paper";
  }

  if (userwin) {
    userscore++;
    userScoreBoard.innerText = userscore;
    msg.innerText = `You Win 🎉 (Computer chose ${computerchoice})`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    computerscore++;
    computerScoreBoard.innerText = computerscore;
    msg.innerText = `You lost 😢 (Computer chose ${computerchoice})`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
}

// ✅ Reset button
resetBtn.addEventListener("click", () => {
  userscore = 0;
  computerscore = 0;
  userScoreBoard.innerText = userscore;
  computerScoreBoard.innerText = computerscore;
  msg.innerText = "Game Reset! Start Playing 🎮";
  msg.style.backgroundColor = "black";
  msg.style.color = "white";
});
