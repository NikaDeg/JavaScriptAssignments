'use strict';
const numberOfRollsStr = prompt('Enter a number of dice rolls:')
const number_of_rolls = parseInt(numberOfRollsStr);

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
let result_sum = 0;
let rounds = 0;

while (rounds < number_of_rolls){
    let dice_roll = getRandomIntInclusive(1,6);
    result_sum += dice_roll;
    rounds ++;
}
document.querySelector('#next').innerHTML = "The sum of dice rolls: " + result_sum;