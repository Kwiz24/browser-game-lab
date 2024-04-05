const mainBox = document.querySelector(".mainBox");

const gameBox = document.querySelector(".gameBox");

const startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.setAttribute("class", "startButton");
startButton.textContent = "Start Game!";
gameBox.appendChild(startButton);

<<<<<<< HEAD
const inputBox = document.createElement('input');
gameBox.appendChild(inputBox);

document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.getElementById("nameForm");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the value of the player's name input field
        var playerNameInput = document.getElementById("playerName");
        var playerName = playerNameInput.value;

        // You can now use the playerName variable to do something with the player's name
        // For example, you can store it in local storage or display a welcome message
        
        // Example: Display a welcome message with the player's name
        alert("Welcome, " + playerName + "! Let's start the game.");

        // Reset the form after processing
        form.reset();
    });
});
=======

const username = () => {
    startButton.remove();
    const message = document.createElement('p');
    message.setAttribute('class', 'firstMessage');
    message.textContent = "Enter your name here: ";
    gameBox.append(message);
    const inputBox = document.createElement("input");
    inputBox.setAttribute('class', 'inputBox');
    gameBox.appendChild(inputBox);
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.setAttribute('class', 'submitButton');
    submitButton.textContent = "Submit";
    gameBox.appendChild(submitButton);
};

startButton.addEventListener("click", username);
>>>>>>> b74adbb31fd37b5065e5402ab5f4c21a8355a719
