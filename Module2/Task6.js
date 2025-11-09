'use strict';
function getRandom() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(6);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
let results = [];
let dice;
do {
    dice = getRandom();
    results.push(dice);
} while(dice !== 6);
for (let r of results) {
    // console.log(`${r} `)
    document.querySelector('#task6').innerHTML += ` <br> ${r} `;
}