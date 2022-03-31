# Currency Exchange
Currency Exchange is a webpage that allows a user to choose two currencies and convert the currencies.

*Created 3/23/2022*

Here is a link to the webpage! Please bookmark or follow this page for future updates!
https://sunghunp.github.io/Currency-Exchange/

## Description
The currency exchange webpage contains 161 currencies to try and convert between. This does not include any cryptocurrencies but does "cover 99% of all UN recognized states and territories" according to the API documentation. 
![Website initial view](https://i.imgur.com/gqScQKa.png "Website inital view")

The user selects two currencies and then the market rate will pop-up at the bottom to show the current rate between the two currencies. They can use the input boxes and convert from the first to the second or vice versa. The input spaces are dynamic so you can convert from either side!
![Convert from second input](https://i.imgur.com/Nvid9KP.png "Image showing conversion of two currencies")

## Technologies Used
- HTML
- CSS
- JavaScript
- ajax
- api's

## Resources
- [jQuery](https://code.jquery.com/jquery-/)
- [API DOCUMENTATION](https://www.exchangerate-api.com/docs/overview)

## Future of the Project and Updates
One thing I want to add to this project is to lookup the historical data of the currencies and even compare multiple currencies at the same time.
- Historial data would be converted into a graph and then a user could select tabs for time frames such as: 3 days, 5days, 1 week, etc. This probably need another API to handle the amount of calls but i de worry about the accuracy of the rates of currencies with using multiple API's
- With multiple currencies I would again need more than 1 API since the request limit for the particular API is capped at 1500 per month. 