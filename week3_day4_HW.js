//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.
// ex => var sampleArray = [1,2,3,4,5] 
// expected output =>  sum = 6
console.log('########## Answer 1')
function addFirstLast(array) {
    let sum = array[0] + array[array.length - 1];
    console.log(sum)
}
var sampleArray = [1, 2, 3, 4, 5];
addFirstLast(sampleArray)


// 2. Write a JavaScript program to find the leap years in a given range of years. 
//Defnition: A Leap year is evenly divisible by 4 but not evenly divisible by 100
// 
console.log('\n########## Answer 2')
function findLeapYear(arrayOf2Years) {
    let leapYearCollection = [];
    for (let year = arrayOf2Years[0]; year <= arrayOf2Years[1]; year++) {
        if (year % 4 == 0) {
            if (year % 100 != 0 || year % 400 == 0) {
                leapYearCollection.push(year)
            }
            else if (year % 400 == 0) {
                leapYearCollection.push(year)
            }
        }
    }
    console.log(leapYearCollection)
    return leapYearCollection;
}

findLeapYear([2000, 2010])




// 3. Write a JavaScript function to sort the following array of objects by title value.
console.log('\n########## Answer 3')
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
orderFun = function (book1, book2) {
    if (book1.title < book2.title) {
        return -1
    }
    else if (book1.title > book2.title) {
        return 1;
    }
    else {
        return 0;
    }
}
library.sort(orderFun)

console.log(library)




// 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
console.log('\n########## Answer 4')
// 1st Function:
sumOfNumbers1 = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            sum += array[i];
        }
    }
    return sum;
}

// 2nd Function:
sumOfNumbers2 = (array) => {
    let numArray = array.filter((a) => typeof a == "number");
    return numArray.reduce((a, b) => a + b);
}

// TEST CASES:
let test1 = [2, "11", 3, "a2", false, 5, 7, 1]// -> 18
let test2 = [2, 3, 0, 5, 7, 8, true, false] //-> 25

console.log('TEST 1st funciton: sumOfNumbers1')
console.log(sumOfNumbers1(test1));
console.log(sumOfNumbers1(test2));

console.log('TEST 2nd function: sumOfNumbers2')
console.log(sumOfNumbers2(test1));
console.log(sumOfNumbers2(test2));

// ##############

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// Assume that the following array of drink objects needs to be sorted:
drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
]
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

console.log('\n########## Answer 5')

function sortDrinkByPrice(drinks) {
    return drinks.sort((drink1, drink2) => drink1.price - drink2.price);
}

console.log(sortDrinkByPrice(drinks))

