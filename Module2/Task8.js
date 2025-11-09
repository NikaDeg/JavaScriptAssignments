function concat(list) {
    let result_string = '';
    for (let i = 0; i <list.length; i++){
        result_string += list[i];
    }
    return result_string;
}
const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
document.querySelector('#task8').innerHTML += ` ${concat(names)} `;