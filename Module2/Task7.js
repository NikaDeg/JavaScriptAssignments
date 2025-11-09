'use strict';
const sides_Str = prompt("Enter the number od dice sides:");
const sides = parseInt(sides_Str);
function getRandom(max){
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
let results = [];
let dice;
do {
    dice = getRandom(sides);
    results.push(dice);
} while(dice !== sides);
for (let r of results) {
    // console.log(`${r} `)
    document.querySelector('#task7').innerHTML += ` <br> ${r} `;
}