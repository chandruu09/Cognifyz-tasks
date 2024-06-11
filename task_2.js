// Develop a basic button that changes its color when clicked using JavaScript.

const button = document.getElementById('colorButton');

button.addEventListener('click', function() {
  button.classList.toggle('clicked');
});


        // Create an alert box that displays a greeting message based on the current time using JavaScript.

const currentHour = new Date().getHours();

let greetingMessage;

if (currentHour < 12) {
  greetingMessage = "Good morning!";
} else if (currentHour < 18) {
  greetingMessage = "Good afternoon!";
} else {
  greetingMessage = "Good evening";
}

alert(greetingMessage);



                // Build a basic calculator that adds two numbers together and displays the result using JavaScript.

function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').innerText = `Result: ${sum}`;
  }
  