'use strict';
const answer = confirm('Should I calculate the square root?');
if (answer === true){
    const numberStr = prompt('Enter a positive number');
    const number = +numberStr;
    if (number < 0){
        document.querySelector('#hello').innerHTML = "The square root of a negative number is not defined.";
    } else {
        const squareRoot = Math.sqrt(number);
        document.querySelector('#hello').innerHTML = "The square root is " + squareRoot.toFixed(2);
    }
} else {
    document.querySelector('#hello').innerHTML = "The square root is not calculated.";
}
