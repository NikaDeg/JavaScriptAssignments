'use strict';
const name = prompt('Enter your name');
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
const num = getRandomIntInclusive(1,4);

switch (num) {
    case 1:
        document.querySelector('#target').innerHTML = name + ", you are Gryffindor";
        break;
    case 2:
        document.querySelector('#target').innerHTML = name + ", you are Slytherin";
        break;
    case 3:
        document.querySelector('#target').innerHTML = name + ", you are Ravenclaw";
        break;
    default:
        document.querySelector('#target').innerHTML = name + ", you are Hufflepuff";
}
