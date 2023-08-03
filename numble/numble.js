const max=100;
const targetNumber = Math.floor(Math.random() * max) + 1;
    let chances = 7;

    function check() {
      const userGuess = parseInt(document.getElementById('num').value);
      const resultElement = document.getElementById('op');

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultElement.textContent = 'Please enter a valid number between 1 and 100.';
      } else {
        chances--;
        if (userGuess === targetNumber) {
          resultElement.textContent = `Congratulations! You guessed the correct number ${targetNumber}.`;
          disableInputAndButton();
        } else {
          if (chances > 0) {
            const hint = userGuess < targetNumber ? 'higher' : 'lower';
            resultElement.textContent = `Try again! The number is ${hint} than ${userGuess}. \nYou have ${chances} ${chances === 1 ? 'chance' : 'chances'} left.`;
          } else {
            resultElement.textContent = `Game over! The correct number was ${targetNumber}.`;
            disableInputAndButton();
          }
        }
      }
    }

    function disableInputAndButton() {
      document.getElementById('num').disabled = true;
      document.getElementsByTagName('button')[0].disabled = true;
    }

var input = document.getElementById("num");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
