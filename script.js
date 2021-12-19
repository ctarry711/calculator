const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  }
  let total = a;
  let i = a;
  while (i > 1) {
    i -= 1;
    total = total * i;
  }
  return total;
};

let displayValue = "";
let num1 = NaN;
let num2 = NaN;
buttons = document.querySelectorAll("button");
display = document.querySelector("#display");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnPressed = btn.textContent;
    if (parseInt(btnPressed) || parseInt(btnPressed) == 0) {
      displayValue += btnPressed;
      display.textContent = displayValue;
    } else if (btnPressed === "C") {
      num1 = NaN;
      num2 = NaN;
      operator = function () {};
      displayValue = "";
      display.textContent = displayValue;
    } else if (
      btnPressed === "+" ||
      btnPressed === "-" ||
      btnPressed === "×" ||
      btnPressed === "÷"
    ) {
      if (num1 || num1 == 0) {
        num2 = parseInt(displayValue);
        result = operator(num1, num2);
        displayValue = result;
        num1 = result;
        num2 = 0;
        display.textContent = displayValue;
        displayValue = "";
      } else {
        num1 = parseInt(displayValue);
        displayValue = "";
      }
      switch (btnPressed) {
        case "+":
          operator = add;
          break;
        case "-":
          operator = subtract;
          break;
        case "×":
          operator = multiply;
          break;
        case "÷":
          operator = divide;
          break;
      }
    } else if (btnPressed === "=") {
      if (num1 || num1 == 0) {
        num2 = parseInt(displayValue);
        result = operator(num1, num2);
        displayValue = result;
        num1 = result;
        num2 = 0;
        display.textContent = displayValue;
        displayValue = "";
      } else {
        num1 = parseInt(displayValue);
        displayValue = "";
      }
    }
  });
});
