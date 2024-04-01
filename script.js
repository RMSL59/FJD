function processInput() {
    var userInput = document.getElementById('userInput').value;
    var outputDiv = document.getElementById('output');

    // Example processing: simply displaying the input back to the user
    outputDiv.innerText = "You entered: " + userInput;
}