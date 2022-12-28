let operator = '';
let currentValue = '';
let previousValue = '';

let clear = document.querySelector("#clear-btn");
let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

numbers.forEach(number => number.addEventListener('click', function(e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
}));

function handleNumber(num) {
    if (currentValue.length <= 10) {
    currentValue += num
    }
};

operators.forEach(op => op.addEventListener('click', function(e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + ' ' + operator;
    currentScreen.textContent = currentValue;
}));

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
};

clear.addEventListener('click', function() {
    currentValue = '';
    previousValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
});

equal.addEventListener('click', function() {
    calculate();
    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
});

function calculate() {
    if (previousValue != '' && currentValue != ''){
        previousValue = Number(previousValue);
        currentValue = Number(currentValue);

        if (operator === "+") {
            previousValue += currentValue;
        }
        else if (operator === "-") {
            previousValue -= currentValue;
        }
        else if (operator === "x") {
            previousValue *= currentValue;
        }
        else {
            previousValue /= currentValue;
        }

        previousValue = roundNumber(previousValue);
        currentValue = previousValue;
    }
};

function roundNumber(num) {
    return (Math.round(num * 1000) / 1000).toFixed(3);
}

decimal.addEventListener('click', function(){
    addDecimal();
})

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    };
}