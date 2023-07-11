const pageContent = document.getElementById("contents");

function removeHomepageContent() {
  if (window.location.href === "https://www.youtube.com/") {
    console.log(window.location.href);

    // const pageContent = document.getElementById("contents");
    // console.log(pageContent);
    // pageContent.style.border = "3px solid red";

    // Step 1: Create the new element
    const newElement = document.createElement("div");
    const giphyContainer = document.createElement("div");

    giphyContainer.innerHTML = `
<iframe src="https://giphy.com/embed/mC7g4euY2YcTjHbTfL" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

  
`;

    newElement.style.height = "80vh";
    newElement.style.width = "80vh";
    newElement.style.display = "flex";
    newElement.style.justifyContent = "center";

    newElement.style.alignItems = "center";
    newElement.style.fontSize = "24px";
    // newElementText.style.color = "white";
    // newElement.appendChild(newElementText);
    newElement.appendChild(giphyContainer);

    // Step 2: Get a reference to the existing element

    // Step 3: Get a reference to the parent element
    const parentElement = pageContent.parentNode;

    // Step 4: Replace the existing element with the new element
    parentElement.replaceChild(newElement, pageContent);
  }
}
removeHomepageContent();

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.checkboxState) {
    console.log(checkboxState);
    // Checkbox is checked, perform the desired action
    // Your code here
  } else {
    console.log(checkboxState);
    // Checkbox is unchecked, perform another action or revert changes
    // Your code here
  }
});
