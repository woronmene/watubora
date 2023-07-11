document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", function () {
    const isChecked = checkbox.checked;
    console.log(isChecked);

    chrome.runtime.sendMessage({ checkboxState: isChecked });
  });
});
