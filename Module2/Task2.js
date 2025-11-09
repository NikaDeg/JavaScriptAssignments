'use strict';
const number_of_participants_STR = prompt("Enter number of participants:");
const number_of_participants = parseInt(number_of_participants_STR);
const participants = [];
for (let i= 0; i < number_of_participants; i ++){
    let name_of_participant = prompt("Enter name of participant: ");
    participants.push(name_of_participant);
}
participants.sort();
document.querySelector('#list').innerHTML = 'The list of participants in alphabetical order: <br>';
for (let a = 0; a < number_of_participants; a++) {
    document.querySelector('#task2').innerHTML += `${participants[a]}<br>`;
}