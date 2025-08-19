let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput[currentInput.length - 1];
  if ('+-*/'.includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}
