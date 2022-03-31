// Grab API key
const API_KEY = config.API_KEY

// Local storage so i dont have to do the api call again when user refreshes.
myStorage = window.localStorage

// Constant Variables.
const $searchLeft = $('#search-left')
const $searchRight = $('#search-right')
const $inputLeft = $('#input-left')
const $display = $('#display')

// Function to get country codes from api and append them the html element you want. 
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

document.querySelector('button').addEventListener("click", () => {
    let selectleftVal = $searchLeft.val()
    let selectRightVal = $searchRight.val()
    let inputLeftVal = $inputLeft.val()
    $.ajax({
        url: `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${selectleftVal}/${selectRightVal}`})
    .then((data) => {
        const rate = data.conversion_rate
        let final = inputLeftVal * rate
        final.toFixed(2)
        $display.text(final)
    })
})

// use restful country api to get country flags 
// very useful since you can search up by currency.
// https://restcountries.com/v3.1/currency/pen

// Filter Response for restful country api 
// You can filter the output of your request to include only the specified fields.
// https://restcountries.com/v3.1/currency/pen?fields=capital only gets the capital field.