'use strict';
let numbers = [];
let input;
do {
    let input_Str = prompt('Enter a number:');
    input = parseInt(input_Str);
    numbers.push(input);
} while (input !== 0);
numbers.sort((a,b) => b-a);
for (let num of numbers) {
    document.querySelector('#task4').innerHTML += `<br> ${num}`;
}
