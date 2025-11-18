'use strict';
const div = document.querySelector('#target');
const items = ['First Item', 'Second Item', 'Third Item'];

for (const item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    div.appendChild(li);
}

const second = document.querySelectorAll('li')[1];
second.classList.add("my-list");


