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

const round16 = function (a) {
  return Math.round(a * 10 ** 16) / 10 ** 16;
};

let displayValue = "";
let num1 = NaN;
let num2 = NaN;
buttons = document.querySelectorAll("button");
display = document.querySelector("#display");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("mouse-hover");
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("mouse-hover");
  });

  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => btn.classList.remove("operation-pressed"));
    btnPressed = btn.textContent;
    if (!isNaN(parseInt(btnPressed))) {
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
      if (!isNaN(num1)) {
        num2 = parseInt(displayValue);
        result = operator(num1, num2);
        displayValue = result;
        num1 = result;
        num2 = NaN;
        display.textContent = round16(displayValue);
        displayValue = "";
      } else {
        num1 = parseInt(displayValue);
        btn.classList.add("operation-pressed");
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
      if (!isNaN(num1)) {
        if (isNaN(num2)) {
          btn.classList.remove("operation-pressed");
          num2 = parseInt(displayValue);
          result = operator(num1, num2);
          displayValue = result;
          num1 = result;
          display.textContent = round16(displayValue);
        } else {
          num1 = result;
          result = operator(num1, num2);
          displayValue = result;
          display.textContent = round16(displayValue);
        }
      }
    }
  });
});
