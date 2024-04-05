const mainBox = document.querySelector('.mainBox');

const gameBox = document.querySelector('.gameBox');

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
