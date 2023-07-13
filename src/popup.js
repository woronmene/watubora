document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  let focusText = document.createElement("p");
  focusText.className = "focusText";

  chrome.storage.local.get("wbCbSt", function (data) {
    const checkboxLocalStorageState = data.wbCbSt;
    if (checkboxLocalStorageState === true) {
      checkbox.checked = true;
      focusText.textContent = "Turn off focus mode";
      // Perform desired actions for true value
    } else {
      checkbox.checked = false;
      focusText.textContent = "Turn on focus mode";
      // Perform desired actions for false value or if value is not set
    }

    document.getElementsByClassName("body")[0].prepend(focusText);
  });

  //   I need to save the checkbox state in local storage and use it to keep the ui updated

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTabUrl = tabs[0].url;

    // Do something with the URL
    console.log("Current tab URL:", currentTabUrl);
  });

  checkbox.addEventListener("change", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTabUrl = tabs[0].url;
      if (currentTabUrl === "https://www.youtube.com/") {
        const isChecked = checkbox.checked;
        let focusText = document.getElementsByClassName("focusText")[0];
        if (isChecked) {
          focusText.textContent = "Turn off focus mode";
        } else {
          focusText.textContent = "Turn on focus mode";
        }
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { checkboxState: isChecked });
          }
        );
      }
      // Do something with the URL
    });
  });
});
