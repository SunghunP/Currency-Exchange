// Grab API key
const API_KEY = config.API_KEY

// Constant Variables.
const $searchLeft = $('#search-left')
const $searchRight = $('#search-right')
const $inputLeft = $('#input-left')
const $inputRight = $('#input-right')
// Function to get country codes from api and append them the html element you want. 
function getCodes(data, selection) {
    for (let array of data) {
        const $option = $('<option></option>')
        $option.text(`${array[1]} (${array[0]})`)
        $option.attr("value", `${array[0]}`)
        $option.appendTo(selection)
    }
}

// // api call to populate the select elements programmatically
// $.ajax({
//     url: `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`})
// .then((data2) => {
//     getCodes(data2.supported_codes, $searchLeft)
//     getCodes(data2.supported_codes, $searchRight)
// })

// I should use event propogation to handle the change of the select and input elements.
// event listener that selects the parent of the two select elements and input element and listens for a change in any of them.
document.querySelector('#search-bar').addEventListener("change", (event) => {
    console.log("This reached inside the div event listener")

    // if the selected target is a select element.
    if (event.target.tagName === 'SELECT') {
        // grabs the two selected currencies to convert from/to
        let selectleftVal = $searchLeft.val()
        let selectRightVal = $searchRight.val()

        $.ajax({
            url: `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${selectleftVal}/${selectRightVal}`
        })
        .then((data) => {
            // stores the conversion rate 
            let rate = data.conversion_rate
            let convertedVal = 0
            // event listener that looks for any changes in both of the input fields.
            document.querySelectorAll('input').forEach(input => 
                input.addEventListener('change', (event) => {
                    // if the change occures on $input-left
                    if (event.target.id === 'input-left') {
                        // grabs the current value of #input-left and converts it into the other currency using the saved rate.
                        inputLeftVal = $inputLeft.val()
                        final = inputLeftVal * rate.toFixed(2)
                        // cannot use .text() on input elements to change the value. 
                        $inputRight.val(convertedVal)
                    }
                    // if the change occurs on #input-right
                    else if (event.target.id === 'input-right') {
                        // grabs current value of #input-right and applies some math to convert it into the other currency
                        inputRightVal = $inputRight.val()
                        final = inputRightVal / rate.toFixed(2)
                        $inputLeft.val(convertedVal)
                    }
                })
            )
        })
    }
})
