'use strict';
async function jokes() {
    const url = 'https://api.chucknorris.io/jokes/random';

    try {
        const response = await fetch(url);
        const result = await response.json();
        document.querySelector("#joke").innerHTML = (result['value'])
    } catch (error) {
        console.error(error);
    }
}
jokes();
