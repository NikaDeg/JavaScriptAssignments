'use strict';
const numbers = [];
for (let i = 0; i <= 4; i++){
    let answer = prompt("Enter a number: ");
    numbers.push(answer);
}
for (let a = 4; a >= 0; a--){
    document.querySelector('#name').innerHTML += `  ${numbers[a]}`;
}