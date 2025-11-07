'use strict';
const numberStr = prompt('Enter a number: ');
const number = parseInt(numberStr);
let a = 0;
for (let i = 1; i <= number; i++){
    if (number % i === 0){
        a += 1;
    }
}
if (a === 2){
    document.querySelector('#number').innerHTML = "Your number is a primer number";
} else {
    document.querySelector('#number').innerHTML = "Your number is NOT a primer number";
}
