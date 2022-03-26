// Grab API key
const API_KEY = config.API_KEY

const $searchLeft = $('#search-left')
const $searchRight = $('#search-right')
const $inputLeft = $('#input-left')
const $display = $('#display')

function getCodes(data, selection) {
    for (let array of data) {
        const $option = $('<option></option>')
        $option.text(`${array[1]} (${array[0]})`)
        $option.attr("value", `${array[0]}`)
        $option.appendTo(selection)
    }
}

$.ajax({
    url: `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`})
.then((data2) => {
    getCodes(data2.supported_codes, $searchLeft)
    getCodes(data2.supported_codes, $searchRight)
})