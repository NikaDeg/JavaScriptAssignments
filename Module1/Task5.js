'use strict';
const yearStr = prompt('Enter a year');
const year = +yearStr;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        document.querySelector("#target").innerHTML = 'This is a leap year!';
} else {
    document.querySelector("#target").innerHTML = "This is NOT a leap year.";
}

