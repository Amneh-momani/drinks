"use strict";
let form = document.getElementById('form');
form.addEventListener('submit', showResults);
let result = document.createElement('input');

function showResults(event) {
    event.preventDefault();

    let NUM1 = event.target.NUM1.value;
    let NUM2 = event.target.NUM2.value;
    form.appendChild(result);
    result.value = NUM1 * NUM2;

}