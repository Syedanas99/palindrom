

// Select relevant DOM elements
const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text"); // Corrected selector to match an ID
const result = document.querySelector("#result");

// Add event listener to the button
button.addEventListener("click", () => {
    // Get the value of the input field
    const text = inputText.value.trim();

    // Check if the input is empty
    if (text.length === 0) { // Fixed typo "lenght" -> "length"
        alert("Input cannot be empty.");
        return; // Exit the function if the input is empty
    }

    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Check if the cleaned text is a palindrome
    const isPalindrome = cleanText === cleanText.split("").reverse().join("");

    // Create a message based on whether the input is a palindrome or not
    const message = isPalindrome
        ? `<span>Yes.</span> It is a palindrome!`
        : `<span>Nope.</span> Not a palindrome!`;

    // Update the result element with the message
    result.innerHTML = message;
    result.classList.remove("error", "success");
    setTimeout(() => {
        result.classList.add(isPalindrome ? "success" : "error");
    }, 10);
});
