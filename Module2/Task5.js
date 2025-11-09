'use strict';
let numbers = [];
let input;
do {
    let input_Str = prompt('Enter a number:');
    input = parseInt(input_Str);
    if (numbers.includes(input)){
        alert (`That number ${input} has already been given `);
        break;
    }
    numbers.push(input);
} while (true);
numbers.sort((a,b) => a-b);
for (let num of numbers) {
    document.querySelector('#task5').innerHTML += ` ${num} `;
}