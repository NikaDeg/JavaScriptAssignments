'use strict';
const dogs_list = [];
for (let i = 0; i < 6; i++){
    let name = prompt("Enter a name of a dog: ");
    dogs_list.push(name);
}
dogs_list.sort();
dogs_list.reverse();
for (let a = 0; a <= 5; a++){
    document.querySelector('#dogs').innerHTML += `<br> ${dogs_list[a]} `;
}