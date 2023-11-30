//-----------1-----------//

// let obj1 = { name: "person 1", age: 5 };
// let obj2 = { age: 5, name: "person 1" };

// if (obj1.age === obj2.age && obj1.name === obj2.name) {
//     console.log("The condition is true");
// } else {
//     console.log("The condition is false")
// }


//-----------2-----------//

/*let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    for (let index in JSON.parse(xhr.responseText)) {
        console.log(JSON.parse(xhr.responseText)[index].flags.png);
    }
}
xhr.send();*/

//-----------3-----------//

// let XMLHttpRequest = require('xhr2');


// let xhr = new XMLHttpRequest();


// xhr.open('GET', 'https://restcountries.com/v3.1/all');
// xhr.onload = function () {
//     for (let index in JSON.parse(xhr.responseText)) {
//         console.log(JSON.parse(xhr.responseText)[index].name.common);
//         console.log(JSON.parse(xhr.responseText)[index].region);
//         console.log(JSON.parse(xhr.responseText)[index].subregion);
//         console.log(JSON.parse(xhr.responseText)[index].population);

//     }
// }
// xhr.send();