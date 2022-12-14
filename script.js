let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

const temp = document.getElementById("t1");
const temp2 = document.getElementById("t2");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const c1 = document.getElementById("c1");
console.log(c1);
const c2 = document.getElementById("c2");

const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");

let i = 0,
  j = 0;

// p1.innerHTML = prompt("Enter Player 1 Name");
// p2.innerHTML = prompt("Enter Player 2 Name");

// if (p1.innerHTML === "") {
//   p1.innerHTML = "Player 1";
// }
// if (p2.innerHTML === "") {
//   p2.innerHTML = "Player 2";
// }

function computer() {
  let x = Math.floor(Math.random() * 3 + 1);
  let player2 = (document.getElementById("img2").src = x + ".png");

  switch (player2) {
    case "1.png":
      temp2.innerHTML = "Scissors";
      break;

    case "2.png":
      temp2.innerHTML = "Rock";
      break;

    case "3.png":
      temp2.innerHTML = "Paper";
      break;

    default:
      break;
  }

  switch (x) {
    case 1:
      img2.style.transform = "scaleX(-1)";
      break;

    case 2:
      img2.style.transform = "scaleX(-1)";
      break;

    case 3:
      img2.style.transform = "scaleX(-1)";
      break;

    default:
      break;
  }

  return player2;
}

rock.addEventListener("click", () => {
  let player1 = (document.getElementById("img1").src = "2.png");
  temp.innerHTML = "Rock";
  let player2 = computer();

  if (player1 === player2) {
    result.innerHTML = "Draw";
    result.style.color = "blue";
  } else if (player1 === "2.png" && player2 === "1.png") {
    result.innerHTML = "Player 1 Wins";
    result.style.color = "green";
    i++;
    c1.innerHTML = `${i}`;
  } else if (player1 === "2.png" && player2 === "3.png") {
    result.innerHTML = "Player 2 Wins";
    result.style.color = "red";
    j++;
    c2.innerHTML = `${j}`;
  }
});

paper.addEventListener("click", () => {
  let player1 = (document.getElementById("img1").src = "3.png");
  temp.innerHTML = "Paper";
  let player2 = computer();

  if (player1 === player2) {
    result.innerHTML = "Draw";
    result.style.color = "blue";
  } else if (player1 === "3.png" && player2 === "1.png") {
    result.innerHTML = "Player 2 Wins";
    result.style.color = "red";
    j++;
    c2.innerHTML = `${j}`;
  } else if (player1 === "3.png" && player2 === "2.png") {
    result.innerHTML = "Player 1 Wins";
    result.style.color = "green";
    i++;
    c1.innerHTML = `${i}`;
  }
});

scissors.addEventListener("click", () => {
  let player1 = (document.getElementById("img1").src = "1.png");
  temp.innerHTML = "Scissors";
  let player2 = computer();

  if (player1 === player2) {
    result.innerHTML = "Draw";
    result.style.color = "blue";
  } else if (player1 === "1.png" && player2 === "2.png") {
    result.innerHTML = "Player 2 Wins";
    result.style.color = "red";
    j++;
    c2.innerHTML = `${j}`;
  } else if (player1 === "1.png" && player2 === "3.png") {
    result.innerHTML = "Player 1 Wins";
    result.style.color = "green";
    i++;
    c1.innerHTML = `${i}`;
  }
});

// function generate() {
//   let x = Math.floor(Math.random() * 3 + 1);
//   let y = Math.floor(Math.random() * 3 + 1);

//   let player1 = (document.getElementById("img1").src = x + ".png");
//   let player2 = (document.getElementById("img2").src = y + ".png");

//   switch (player1) {
//     case "1.png":
//       temp.innerHTML = "Scissors";
//       break;

//     case "2.png":
//       temp.innerHTML = "Rock";
//       break;

//     case "3.png":
//       temp.innerHTML = "Paper";
//       break;

//     default:
//       break;
//   }

//   switch (player2) {
//     case "1.png":
//       temp2.innerHTML = "Scissors";
//       break;

//     case "2.png":
//       temp2.innerHTML = "Rock";
//       break;

//     case "3.png":
//       temp2.innerHTML = "Paper";
//       break;

//     default:
//       break;
//   }

//   if (player1 === player2) {
//     result.innerHTML = "Draw";
//     result.style.color = "blue";
//   } else if (player1 === "1.png" && player2 === "2.png") {
//     result.innerHTML = "Player 2 Wins";
//     result.style.color = "red";
//     j++;
//     c2.innerHTML = `${j}`;
//   } else if (player1 === "1.png" && player2 === "3.png") {
//     result.innerHTML = "Player 1 Wins";
//     result.style.color = "green";
//     i++;
//     c1.innerHTML = `${i}`;
//   } else if (player1 === "2.png" && player2 === "1.png") {
//     result.innerHTML = "Player 1 Wins";
//     result.style.color = "green";
//     i++;
//     c1.innerHTML = `${i}`;
//   } else if (player1 === "2.png" && player2 === "3.png") {
//     result.innerHTML = "Player 2 Wins";
//     result.style.color = "red";
//     j++;
//     c2.innerHTML = `${j}`;
//   } else if (player1 === "3.png" && player2 === "1.png") {
//     result.innerHTML = "Player 2 Wins";
//     result.style.color = "red";
//     j++;
//     c2.innerHTML = `${j}`;
//   } else if (player1 === "3.png" && player2 === "2.png") {
//     result.innerHTML = "Player 1 Wins";
//     result.style.color = "green";
//     i++;
//     c1.innerHTML = `${i}`;
//   } else {
//     result.innerHTML = "Error";
//   }

//   switch (y) {
//     case 1:
//       img2.style.transform = "scaleX(-1)";
//       break;

//     case 2:
//       img2.style.transform = "scaleX(-1)";

//     case 3:
//       img2.style.transform = "scaleX(-1)";

//     default:
//       break;
//   }
// }

reset.addEventListener("click", () => {
  location.reload();
});
