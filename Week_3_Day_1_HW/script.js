// Week 3 - Day 1 - HW
//
// // 1.
// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
  
//     // or more "elegantly" using the fantastic ternary expression!
//     // return  x >= y ? x : y;
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));
console.log('Question # 1')
// (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and 
// returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - 
// the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
        if (x >= y) {
          return x;
        } else {
          return y;
        }
      
        // or more "elegantly" using the fantastic ternary expression!
        // return  x >= y ? x : y;
      }

console.log(maxOfTwoNumbers(34,56))

console.log('\nQuestion # 2')
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. 
// Again, the Math.max method is not allowed.
maxOfThree = function(num1, num2, num3) {
    let maxOf1stTwo = num1 >= num2 ? num1 : num2;  // get the max of the 1st two numbers
    return maxOf1stTwo >= num3 ? maxOf1stTwo : num3;  // compare the max from the above line with num3 
}

console.log(maxOfThree(44,2,89))


console.log('\nQuestion # 3')
// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a 
// vowel, false otherwise.
let vowels = ['a', 'e', 'i', 'o', 'u'];

function isCharAVowel(char){
    char = char.toLowerCase(); 
    if (vowels.indexOf(char) == -1){   // vowels.includes('char')
        return false
    }
    return true
}

console.log(isCharAVowel('a'))
console.log(isCharAVowel('b'))


console.log('\nQuestion # 4')
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For 
// example, sumArray([2, 4, 5]); would return 11.
sumArray = function(array) {
    // let sum = 0;
    // for(let i=0; i<array.length; i++){
    //     sum += array[i]
    // }
    // return sum

         // OR just
    return array.reduce((a,b)=> a+b)
}
console.log(sumArray([2, 4, 5]))



console.log('\nQuestion # 5')
// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those 
// numbers. For example, multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(array){
    // let sum = 0;
    // for(let i=0; i<array.length; i++){
    //     sum *= array[i]
    // }
    // return sum

         // OR just
         return array.reduce((a,b)=> a*b)
}
console.log(multiplyArray([2, 4, 5]))



console.log('\nQuestion # 6')
// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
numArgs = function(base/*,num1,...,numN*/){
    return arguments.length;
}

console.log(numArgs(4,5,'6',false,'Hello'))  // --> 5



console.log('\nQuestion # 7')
// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For 
// example, reverseString('rockstar'); would return the string "ratskcor".
function reverseString(aString){
    let reversedString = "";
    for(let i=aString.length-1; i>=0; i--){
        reversedString+=aString[i]
    }
    return reversedString;
}
console.log(reverseString('ABCD xyz'))


console.log('\nQuestion # 8')
// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns 
// the length of the longest string.

longestStringInArray = function(arrayOfStrings){
    let lengthsArray = arrayOfStrings.map((a)=>a.length)  // result is an array containing the length for each string given
    return lengthsArray.reduce((a,b)=> a>=b ? a:b) // and this will return the greatest number in the array
}

let arrayOfStrings = ['longestStringInArray', 'that', 'takes', 'an', 'array', 'of', 'strings']
                    //       20,                4,      5,      2,      5,      2,      7 
console.log(longestStringInArray(arrayOfStrings))



console.log('\nQuestion # 9')
// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and 
// returns an array of the strings that are longer than the number passed in. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arrayOfStrings, num){
    return arrayOfStrings.filter((a)=>a.length>num)
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))




// ## Result on Console when running this code as is: 

// Question # 1
// 56

// Question # 2
// 89

// Question # 3
// true
// false

// Question # 4
// 11

// Question # 5
// 40

// Question # 6
// 5

// Question # 7
// zyx DCBA

// Question # 8
// 20

// Question # 9
// [ 'hello', 'morning' ]