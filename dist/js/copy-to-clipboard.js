// https://hollandsweb.com/javascript-tutorial-1-copy-the-text-to-clipboard-using-javascript

// Get references to all the copy buttons and code elements
let tooltipItems = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const elementsToCopy = document.querySelectorAll("code"); 

// Initialize Bootstrap Tooltips
let tooltipTriggerList = [].slice.call(tooltipItems);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
})

// Add click event listeners to all the copy buttons
tooltipItems.forEach((tooltipItem, index) => {
  tooltipItem.addEventListener("click", (e) => {
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
    // Provide some visual feedback to the user
    let tooltip = e.target;
    // https://github.com/twbs/bootstrap/issues/36432
    // https://stackoverflow.com/questions/65862446/bootstrap-5-update-tooltip-title-with-javascript/65863062#65863062
    const tooltipInstance = bootstrap.Tooltip.getInstance(tooltip);
    tooltipInstance.setContent({ '.tooltip-inner': 'Copied!'});
    setTimeout(() => {
      tooltipInstance.setContent({ '.tooltip-inner': 'Copy'});
    }, 1500);
  });
});