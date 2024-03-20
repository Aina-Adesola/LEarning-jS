// Get references to the input and output elements
var inputText = document.getElementById('inputText');
var outputText = document.getElementById('outputText');
var convertToUpperButton = document.getElementById('convertToUpperButton');
var convertToLowerButton = document.getElementById('convertToLowerButton');
var reverseButton = document.getElementById('reverseButton');
var undoButton = document.getElementById('undoButton');
var replaceButton = document.getElementById('replaceButton');
var replaceCharacter = document.getElementById('replaceCharacter');
var replacement = document.getElementById('replacement');

// Function to convert text to uppercase
function convertToUppercase() {
    var text = inputText.value.toUpperCase();
    outputText.value = text;
}

// Function to convert text to lowercase
function convertToLowercase() {
    var text = inputText.value.toLowerCase();
    outputText.value = text;
}

// Function to reverse text
function reverseText() {
  var text = outputText.value.split('').reverse().join('');
  outputText.value = text;
  updatePrevOutputText(); // Update the previous output text
}

// Function to replace characters
function replaceCharacters() {
    var text = inputText.value;
    var charToReplace = replaceCharacter.value;
    var replaceWith = replacement.value;
    var newText = text.split(charToReplace).join(replaceWith);
    outputText.value = newText;
}

// Function to undo changes
function undoChanges() {
    // This function should be implemented according to your requirements
}

// Add click event listeners to the buttons
convertToUpperButton.addEventListener('click', convertToUppercase);
convertToLowerButton.addEventListener('click', convertToLowercase);
reverseButton.addEventListener('click', reverseText);
replaceButton.addEventListener('click', replaceCharacters);

// Variable to store the previous output text
var prevOutputText = '';

// Function to update the previous output text
function updatePrevOutputText() {
    prevOutputText = outputText.value;
}

// Function to undo changes
function undoChanges() {
    outputText.value = prevOutputText; // Set output text to the previous state
}

// Add click event listener to the "Undo" button
undoButton.addEventListener('click', undoChanges);
