const screen = document.getElementById("screen");
let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;

function clearScreen() {
    screen.textContent = "0";
}

function addToScreen(value) {
    if (result !== 0) {
        screen.textContent = value;
        return;
    }
    if (screen.textContent === "0") {
        screen.textContent = value;
    } else {
        screen.textContent += value;
    }
}

function addOperator(value) {
    num1 = parseFloat(screen.textContent);
    operator = value;
    screen.textContent = "0";
}


function calculate() {
    num2 = parseFloat(screen.textContent);
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    screen.textContent = result.toString();
}
