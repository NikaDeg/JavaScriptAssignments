// Open t2 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-item to the second list item
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


