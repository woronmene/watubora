const pageContent = document.getElementById("contents");
const parentElement = pageContent.parentNode;
const newElement = document.getElementById("newElement");

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Kodchasan&display=swap";
link.rel = "stylesheet";

document.head.appendChild(link);

function removeHomepageContent() {
  console.log(window.location.href);
  if (window.location.href === "https://www.youtube.com/") {
    console.log(window.location.href);
    // Step 1: Create the new element
    const newElement = document.createElement("div");
    newElement.id = "newElement";
    newElement.style.height = "80vh";
    newElement.style.width = "80vh";
    newElement.style.display = "flex";
    newElement.style.justifyContent = "center";

    newElement.style.alignItems = "center";
    const newElementText = document.createElement("p");
    newElementText.className = "newElementText";
    newElementText.style.fontSize = "30px";
    newElementText.style.fontFamily = "Kodchasan";
    newElementText.style.color = "white";
    newElementText.innerText = "Time to focus";
    newElement.appendChild(newElementText);
    //     const giphyContainer = document.createElement("div");

    //     giphyContainer.innerHTML = `
    // <iframe src="https://giphy.com/embed/mC7g4euY2YcTjHbTfL" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

    // `;

    //     newElement.style.fontSize = "24px";

    //     newElement.appendChild(giphyContainer);

    // Step 2: Get a reference to the existing element

    // Step 3: Get a reference to the parent element

    // Step 4: Replace the existing element with the new element
    parentElement.replaceChild(newElement, pageContent);
    chrome.storage.local.set({ wbCbSt: true });
  }
}

function addPageContent() {
  const newElement = document.getElementById("newElement");
  // console.log(newElement);
  parentElement.replaceChild(pageContent, newElement);
  // localStorage.setItem("wbCbSt", false);
  chrome.storage.local.set({ wbCbSt: false });
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
  if (message.checkboxState) {
    // console.log(checkboxState);
    removeHomepageContent();
    // console.log(newElement, pageContent);
    // const contentParent = document.getElementById("primary");
    // const newElement = document.getElementById("newElement");
    // console.log(newElement);
    // Checkbox is checked, perform the desired action
    // Your code here
  } else {
    addPageContent();

    // Checkbox is unchecked, perform another action or revert changes
    // Your code here
  }
});

chrome.storage.local.get("wbCbSt", function (data) {
  if (data.wbCbSt) {
    removeHomepageContent();
  } else {
    addPageContent();
  }
});

// removeHomepageContent();
