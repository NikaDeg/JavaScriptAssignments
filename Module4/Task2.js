'use strict';

const form = document.getElementById('search_form')

form.addEventListener('submit', async function(evt){
    evt.preventDefault()

    const search_term = document.querySelector('input[name=q]').value
    const url = 'https://api.tvmaze.com/search/shows?q='+search_term

    try{

        const response = await fetch(url)
        if(response.status===200){
            const result = await response.json()
            console.log(result)
        }

    } catch(error){
        console.log(error)

    }

})