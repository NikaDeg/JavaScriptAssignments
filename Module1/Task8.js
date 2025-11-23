'use strict';
const start_year_str = prompt('Enter start year: ');
const start_year = parseInt(start_year_str);
const end_year_str = prompt('Enter end year: ');
const end_year = parseInt(end_year_str);
const all_leap_years = document.querySelector("#years");

for (let i = start_year; i <= end_year; i++ ){
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
        all_leap_years.innerHTML += `<li>${i}</li>`;
}
}


