//Searching the dom for elements
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var nameOfCity = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

//openWeather api key
let apiKey = 'yourApiKey';

//Adding a click event listener to button
button.addEventListener('click', function() {
    //Hit the api
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=' + apiKey + '')
        //converting the response to json
        .then(respone => respone.json())

    //taking json values
    .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            //change the inner HTML text of the elements
            nameOfCity.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })
        //if the given name is wrong alert the user
        .catch(err => alert("wrong city name!"))
})