'use strict';
const form = document.createElement("form");
form.action = "https://api.tvmaze.com/search/shows";
const input1 = document.createElement("input");
input1.id = "query";
input1.name = "q";
input1.type = "text";
const input2 = document.createElement("input");
input2.type = "submit";
input2.value = "Search";

form.appendChild(input1);
form.appendChild(input2);
const here = document.querySelector('#here').appendChild(form)
