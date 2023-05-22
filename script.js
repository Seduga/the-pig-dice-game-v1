(function () {
"use strict"

  const startBtn = document.querySelector("#startbtn");
  const quitBtn = document.querySelector("#quitbtn");
  const rollBtn = document.querySelector("#rollbtn");
  const holdBtn = document.querySelector("#holdbtn");
  let counter = 0;
  let totalTurn = 0;
  let totalScore1 = 0;
  let totalScore2 = 0;
  const player1 = document.querySelector("#total1player");
  const player2 = document.querySelector("#total2player");
  const allDices = document.querySelectorAll("#dice_block li");
  let currentPlayer = player1;

  startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showAll();
  });

  function randomNum(min, max) {
    const numOfValues = max - min + 1;
    let randomNum = Math.random();
    let randomValue = randomNum * numOfValues;
    let finalNum = Math.floor(randomValue) + min;

    if (finalNum > 1) {
      totalTurn += finalNum;
    } else {
      totalTurn = 0;
      if (currentPlayer == player1) {
        currentPlayer = player2;
        document.querySelector("#secondPlayer").style.color = "red";
        document.querySelector("#firstPlayer").style.color = "black";
      } else {
        currentPlayer = player1;
        document.querySelector("#firstPlayer").style.color = "red";
        document.querySelector("#secondPlayer").style.color = "black";
      }
    }
    document.querySelector("#scorebox").innerHTML = totalTurn;

    counter = Math.floor(finalNum);
  }

  rollBtn.addEventListener("click", function () {
    randomNum(1, 6);

    for (let i = 0; i < allDices.length; i++) {
      allDices[i].style.display = "none";
    }
    let thisDice = document.querySelector(
      `#dice_block li:nth-child(${counter}) `
    );
    thisDice.style.display = "inline";
  });

  holdBtn.addEventListener("click", function () {
    if (currentPlayer == player1) {
      totalScore1 += totalTurn;
      currentPlayer.innerHTML = totalScore1;
      currentPlayer = player2;
      document.querySelector("#secondPlayer").style.color = "red";
      document.querySelector("#firstPlayer").style.color = "black";
    } else if (currentPlayer == player2) {
      totalScore2 += totalTurn;
      currentPlayer.innerHTML = totalScore2;
      currentPlayer = player1;
      document.querySelector("#firstPlayer").style.color = "red";
      document.querySelector("#secondPlayer").style.color = "black";
    }

    if (totalScore1 >= 100) {
      deleteAll();
      document.querySelector("#winMessagefor1player").style.display = "inline";
    }

    if (totalScore2 >= 100) {
      deleteAll();
      document.querySelector("#winMessagefor2player").style.display = "inline";
    }
    totalTurn = 0;
    document.querySelector("#scorebox").innerHTML = totalTurn;
  });

  quitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    deleteAll();
    currentPlayer = player1
    document.querySelector("#firstPlayer").style.color = "red";
      document.querySelector("#secondPlayer").style.color = "black";
  });

  function showAll() {
    startBtn.style.display = "none";
    quitBtn.style.display = "inline";
    rollBtn.style.display = "inline";
    holdBtn.style.display = "inline";
    document.querySelector("#firstPlayer").style.display = "inline";
    document.querySelector("#secondPlayer").style.display = "inline";
    document.querySelector("#winMessagefor1player").style.display = "none";
    document.querySelector("#winMessagefor2player").style.display = "none";
    document.querySelector("#scorebox").style.display = "inline";
  }
  function deleteAll() {
    quitBtn.style.display = "none";
    startBtn.style.display = "inline";
    rollBtn.style.display = "none";
    holdBtn.style.display = "none";
    document.querySelector("#firstPlayer").style.display = "none";
    document.querySelector("#secondPlayer").style.display = "none";
    player1.innerHTML = "";
    player2.innerHTML = "";
    document.querySelector("#scorebox").style.display = "none";
    totalScore1 = 0;
    totalScore2 = 0;
    totalTurn = 0;
    counter = 0;
    let pics = document.querySelectorAll(".dice_pic");
    for (let i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";
    }
  }
})();
