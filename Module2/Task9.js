const even_list = [];
function even(list) {
    for(let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0){
            even_list.push(list[i]);
        }
    } return (even_list);
}
const numbers_list = [2 , 7 , 9 , 4];
const new_list = even(numbers_list);

console.log(numbers_list);
console.log(new_list);