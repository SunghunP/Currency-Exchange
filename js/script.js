// Grab API key
const API_KEY = config.API_KEY

const $searchLeft = $('#search-left')
const $searchRight = $('#search-right')
const $inputLeft = $('#input-left')
const $display = $('#display')

$.ajax({
    url: `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`})
.then((data2) => {
    console.log(data)
})
