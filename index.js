let newLine = true; // Boolean Variable. This determines if the next thing the user types should be on a new line.
let value1;
let currentOperator;

// Event handler for when a digit is pressed
function digitBtnPressed(button) {

    if (newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        let currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    };

};

// Event handler for when AC button is pressed
function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;
};

//Event handler for operator buttons
function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
};

// Event handler for equals button
function equalsBtnPressed() {
    let value2 = parseInt(document.getElementById("inputBox").value);
    let finalTotal;

    switch (currentOperator) {
        case "+":
            finalTotal = value1 + value2;
            break;
        case "-":
            finalTotal = value1 - value2;
            break;
        case "*":
            finalTotal = value1 * value2;
            break;
        case "/":
            finalTotal = value1 / value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;

    value1 = 0;
    newLine = true;
};