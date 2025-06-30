
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 10;
    const guessInput = document.getElementById("guess");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");
    const restartBtn = document.getElementById("restartBtn");

    function checkGuess() {
      const userGuess = parseInt(guessInput.value);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.innerText = "Enter a number between 1 and 100.";
        message.style.color = "black";
        return;
      }

      attemptsLeft--;
      attemptsDisplay.innerText = "Attempts left: " + attemptsLeft;

      if (userGuess === randomNumber) {
        message.innerText = " Correct! You win!";
        message.style.color = "green";
        endGame();
      } else if (attemptsLeft === 0) {
        message.innerText = `Game Over! The number was ${randomNumber}.`;
        message.style.color = "red";
        endGame();
      } else {
        if (userGuess < randomNumber) {
          message.innerText = "Too low! Try again.";
          message.style.color = "blue";
        } else {
          message.innerText = "Too high! Try again.";
          message.style.color = "orange";
        }
      }

      guessInput.value = "";
    }

    function endGame() {
      guessInput.disabled = true;
      restartBtn.style.display = "inline-block";
    }

    function restartGame() {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attemptsLeft = 10;
      guessInput.disabled = false;
      guessInput.value = "";
      message.innerText = "";
      attemptsDisplay.innerText = "Attempts left: 10";
    }
