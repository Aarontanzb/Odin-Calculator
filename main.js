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