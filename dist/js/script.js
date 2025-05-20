// https://hollandsweb.com/javascript-tutorial-1-copy-the-text-to-clipboard-using-javascript

// Get references to all the copy buttons and code elements
const copyButtons = document.querySelectorAll(".copy-icon");
const elementsToCopy = document.querySelectorAll("code");

// Add click event listeners to all the copy buttons
copyButtons.forEach((copyButton, index) => {
  copyButton.addEventListener("click", () => {
    // Get the corresponding element’s text content
    const textToCopy = elementsToCopy[index].textContent;
    // Create a temporary textarea element to copy the text to the clipboard
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    // Append the textarea to the document
    document.body.appendChild(textarea);
    // Select the text within the textarea
    textarea.select();
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    // Remove the temporary textarea
    document.body.removeChild(textarea);
    // Provide some visual feedback to the user (e.g., an alert)
    alert("Text has been copied to the clipboard: " + textToCopy);
  });
});
