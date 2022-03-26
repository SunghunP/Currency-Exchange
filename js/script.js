// Grab API key
const API_KEY = config.API_KEY

$.ajax({
    url: `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`,})
.then((data) => {
    console.log(data)
})

