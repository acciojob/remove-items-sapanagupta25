//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  // Get the dropdown and button elements
  const colorSelect = document.getElementById("colorSelect");
  const button = document.querySelector('input[type="button"]');

  // Add click event to the button
  button.addEventListener("click", () => {
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    if (selectedOption) {
      colorSelect.removeChild(selectedOption);
    }
  });
});
