'use strict';
const div = document.querySelector('#target');
const html =
        `<p>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
         </p>`;
div.innerHTML = html;
div.classList.add("my-list");

