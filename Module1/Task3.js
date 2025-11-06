'use strict';
const firstStr = prompt('Enter a number:');
const secondStr = prompt('Enter a number again:');
const thirdStr = prompt('Enter a number once again:');
const first = parseInt(firstStr);
const second = parseInt(secondStr);
const third = parseInt(thirdStr);
const sum = first + second + third;
const product = first * second * third;
const average = sum / 3;
document.querySelector('#target').innerHTML =
    'The sum is ' + sum + '<br>' +
    'The product of numbers is ' + product + '<br>' +
    'The average is ' + average.toFixed(2);
