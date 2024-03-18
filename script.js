const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}

let isOpen = false;

function toggleParantheses() {
    const display = document.getElementById("display");

    if (isOpen) {
        display.value += ")";
    } else {
        display.value += "(";
    }
    isOpen = !isOpen;
}

function toggleSign() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = -currentValue;
    }
}

function removeLastChar() {
    display.value = display.value.slice(0, -1);
}