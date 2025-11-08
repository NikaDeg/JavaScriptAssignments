'use strict';
const dice_str = prompt('Enter number of dice: ');
const dice_number = parseInt(dice_str);
const sum_Str = prompt('Enter sum of the eye numbers: ')
const sum_eye_numbers = parseInt(sum_Str);

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
let number_of_desired_sum = 0;
const rounds = 10000;

for (let i = 0; i<= rounds; i++){
    let one_round_sum = 0;
    for (let a = 0; a < dice_number; a++){
        let one_round_result = getRandomIntInclusive( 1, 6);
        one_round_sum += one_round_result;
    } if (one_round_sum === sum_eye_numbers){
        number_of_desired_sum ++;
    }
}
const probability_in_percents = (number_of_desired_sum / rounds) * 100;
document.querySelector('#probability').innerHTML = `Probability to get sum ${sum_eye_numbers} with ${dice_number} dice is ${probability_in_percents.toFixed(2)}%`;
