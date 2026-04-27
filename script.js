const display = document.getElementById("display");

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    display.value = eval(display.value); // Simple calculation
  } catch {
    alert("Invalid Expression");
  }
}
