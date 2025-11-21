'use strict';

const form = document.getElementById('search_form')

form.addEventListener('submit', async function(evt){
    evt.preventDefault()

    document.querySelector('#results').innerHTML = '';

    const search_term = document.querySelector('input[name=q]').value
    const url = 'https://api.tvmaze.com/search/shows?q='+search_term

    try{

        const response = await fetch(url)
        if(response.status===200){
            const result = await response.json()
            for (let res of result){
                let html = `
                <article>
                    <h2>${res['show']['name']}</h2>
                    <a target="blank">${res['show']['officialSite']}</a>
                    <img src=${res.show.image?.medium} alt=${res['show']['name']}>
                    <div>${res['show']['summary']}</div>
                </article> `
                document.querySelector('#results').innerHTML += html;

            }
        }

    } catch(error){
        console.log(error)

    }

})