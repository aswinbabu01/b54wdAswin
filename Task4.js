//1._______________Nameless Function & IIFE Function______________//
//Nameless Function//

//Print odd numbers in an array//

/*let numbers = [71, 23, 55, 45, 44, 66, 89, 42, 24, 63];
numbers.filter(function (numbers) {
    if (numbers % 2 !== 0) {
        console.log(numbers)
    }
});*/
//Convert all the strings to title caps in a string array
/*let Arr = ["hello", "welcome", "greeting"];

let titlecaps = Arr.map(function (sentence) {
    return sentence.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
});
console.log(titlecaps);*/

//Sum of all numbers in array//

/*let AddNumbers = function (a, b, c, d, e) {
    console.log(a + b + c + d + e);
}
AddNumbers(24, 38, 67, 77, 98);*/

// Return all the prime numbers in an array//

/*let number = [1, 2, 3, 5, 6, 7, 11, 13, 15, 17, 19, 24];
let isPrime = function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

let primeNumbers = number.filter(function (num) {
    return isPrime(num);
});
console.log(primeNumbers);*/


// Return all the palindromes in an array//

/*let strArray = ["level", "hello", "madam", "world", "radar"];

let palindromeArray = strArray.filter(str => {
    const palindromeStr = str.toLowerCase();
    return palindromeStr === palindromeStr.split('').reverse().join('');
});
console.log(palindromeArray);*/


// Return median of two sorted arrays of the same size.//

/*let array1 = [1, 3, 5, 7, 8];
let array2 = [2, 4, 6, 5, 9];

let Median = (arr1, arr2) => {
    let merged = [...arr1, ...arr2];
    merged.sort((a, b) => a - b);

    let length = merged.length;
    let mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};
console.log(Median(array1, array2));*/

// Remove duplicates from an array//

/*let arrayWithDuplicates = [7, 8, 9, 7, 6, 2, 6, 8, 1, 3, 6];

let uniqueArray = arrayWithDuplicates.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
console.log(uniqueArray);*/

// Rotate an array by k times//
/*let arrayToRotate = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 6;
let rotateArray = (arr, rotation) => {
    rotation = rotation % arr.length; // To handle cases where k is larger than array length
    return [...arr.slice(rotation), ...arr.slice(0, rotation)];
};

let rotatedArray = rotateArray(arrayToRotate, k);
console.log(rotatedArray);*/


//IIFE
//Print odd numbers in an array//
/*(function () {
    let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    (function (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                console.log(arr[i]);
            }
        }
    })(Numbers);
})();*/



//Convert all the strings to title caps in a string array//
/*(function () {
    let stringArray = ["hello", "welcome", "greeting"];
    stringArray = ((arr) => arr.map((str) =>
        str.split(' ').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
    ))(stringArray);
    console.log(stringArray);
})();*/

//Sum of all numbers in array//

/*((a, b, c, d, e, f, g) => console.log(a + b + c + d + e + f + g))(1, 2, 3, 4, 5, 6, 7);*/

// Return all the prime numbers in an array//

/*(function () {
    let numberArray = [2, 5, 6, 7, 11, 13, 44, 56];
    let primeNumbers = (function (arr) {
        return arr.filter(function (num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        });
    })(numberArray);

    console.log(primeNumbers);
})();*/


// Return all the palindromes in an array//
/*(function () {
    let stringArray = ["level", "hello", "madam", "world", "radar"];
    let palindromes = (function (arr) {
        return arr.filter(function (str) {
            let normalizedStr = str.toLowerCase();
            return normalizedStr === normalizedStr.split('').reverse().join('');
        });
    })(stringArray);

    console.log(palindromes);
})();*/


// Return median of two sorted arrays of the same size.//
/*(function () {
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [6, 7, 8, 9, 10];

    // IIFE to calculate median of two sorted arrays
    let median = (function (arr1, arr2) {
        let mergedArray = [...arr1, ...arr2];
        mergedArray.sort((a, b) => a - b);

        let length = mergedArray.length;
        let mid = Math.floor(length / 2);

        if (length % 2 === 0) {
            // If the length is even, return the average of the middle two elements
            return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        } else {
            // If the length is odd, return the middle element
            return mergedArray[mid];
        }
    })(array1, array2);
    console.log(median);
})();*/


// Remove duplicates from an array//
/*(function () {
    let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 7, 9, 7, 56, 4, 5, 7, 2, 1, 5];

    // IIFE with .filter to remove duplicates
    let uniqueArray = (function (arr) {
        return arr.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });
    })(arrayWithDuplicates);

    console.log(uniqueArray);
})();*/


// Rotate an array by k times//

/*(function () {
    let arrayToRotate = [1, 2, 3, 4, 5];
    let k = 2;
    let rotatedArray = (function (arr, rotations) {
        rotations = rotations % arr.length; // To handle cases where k is larger than array length
        return [...arr.slice(rotations), ...arr.slice(0, rotations)];
    })(arrayToRotate, k);

    console.log(rotatedArray);
})();*/


//2._________________Arrow Function_____________//

//Print odd numbers in an array

// let numbers = (a) => {if (a % 2 === 1)
//  {
//         console.log(a);
//  }
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <= arr.length; i++) {
//     numbers(arr[i]);
// }

//Convert all the strings to title caps in a string array

/*let Arr = ["hello", "welcome", "greet"];

let titlecaps = Arr.map(s => {
    return s.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
});
console.log(titlecaps);*/



//Sum of all numbers in array

/*let sumAll = (a, b, c, d, e) => {
    console.log(a + b + c + d + e);
}
sumAll(1, 2, 3, 4, 5);*/

// Return all the prime numbers in an array//
// const Prime = num => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };

// const array = [1, 6, 8, 9, 4, 5, 6, 2, 3, 7];

// const primeNumbers = array.filter(Prime);

// console.log(primeNumbers);

// Return all the palindromes in an array//
// const isPalindrome = str => {
//     const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// };

// const array = ["level", "hello", "madam", "world"];

// const palindromes = array.filter(isPalindrome);

// console.log(palindromes);


// Return median of two sorted arrays of the same size.
// array1 = [1, 2, 3, 4, 5, 6];
// array2 = [5, 6, 8, 7, 9, 3];
// let findMedian = (arr1, arr2) => {
//     let length = arr1.length;

//     let getMid = arr => (arr[Math.floor((length - 1) / 2)] + arr[Math.ceil((length - 1) / 2)]) / 2;

//     let median1 = getMid(arr1);
//     let median2 = getMid(arr2);
//     return (median1 + median2) / 2;
// };
// let median = findMedian(array1, array2);
// console.log(median)

// Remove duplicates from an array//
// let removeDuplicates = arr => arr.filter((value, index, self) => self.indexOf(value) === index);
// let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];
// let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
// console.log(arrayWithoutDuplicates);


// Rotate an array by k times//
// let rotateArray = (arr, k) => {
//     let n = arr.length;
//     let rotationIndex = k % n;
//     let rotatedArray = [...arr.splice(rotationIndex), ...arr];
//     return rotatedArray;
// };
// let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let rotatedArray = rotateArray(originalArray, k);
// console.log(rotatedArray);

