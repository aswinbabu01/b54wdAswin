//_________Get all the countries from Asia continent /region using Filter function______//

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    console.log(countries.filter(country => {
        if (country.region == 'Asia') {
            return true;
        }

    }).map(country => country.name.common));
}
xhr.send();


//_______Get all the countries with a population of less than 2 lakhs using Filter function______//

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    const countriesWithLowPopulation = JSON.parse(xhr.response);
    console.log(countriesWithLowPopulation.filter(country => {
        if (country.population < 200000) {
            return true;
        }

    }).map(country => country.name.common));
}
xhr.send();

//_____Print the following details name, capital, flag, using forEach function________//

const XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    countries.forEach(element => {
        console.log("Name: " + element.name.common);
        if (element.capital !== undefined) {
            element.capital.forEach(item => {
                console.log("Capital: " + item);
            });
        }
        console.log("Flag: " + element.flag);
    });
}
xhr.send();
// //_____Print the total population of countries using reduce function________//

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    let arr = [];
    countries.forEach(element => {
        arr.push(element.population);
    });
    function sum_reducer(accumulator, currentValue) {
        return accumulator + currentValue;
    }
    console.log("Total Population: " + arr.reduce(sum_reducer));
}
xhr.send();

//______Print the country that uses US dollars as currency._______//

const XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    const countries = JSON.parse(xhr.response);
    countries.forEach(country => {
        if (country.currencies !== undefined && country.currencies.USD) {
            console.log(country.name.common);
        }
    });
}
xhr.send();

