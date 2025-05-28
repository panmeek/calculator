let num1 = null;
let num2 = null;
let operator = "";

const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener("click", inputNumber);
});

function inputNumber(event) {
    const number = event.target.textContent;
    num1 = number;
    screen.textContent = `${num1}`;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}
