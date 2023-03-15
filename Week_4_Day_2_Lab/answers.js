// Section 1

// JavaScript Total Recall

console.log('\nB. Strings\n')

// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 34;
// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
secondVariable = "Hi Mars"
// What is the value of firstVariable?
console.log(firstVariable)
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let yourName = "Yonas";
console.log("Hello, my name is " + yourName)


console.log('\nC. Booleans\n')

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


console.log('\nD. The farm\n')

// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
function theFarm(animal) {
    if (animal === 'cow') {
        console.log("mooooo")
    }
}
theFarm('cow')
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
function theFarm2(animal) {

if (animal === 'cow') {
    console.log("mooooo")
}
else {
    console.log("Hey! You're not a cow.")
}
}
theFarm('cow')
theFarm2('cat')
// Commit


console.log("\nE. Driver's Ed\n")

// Make a variable that holds a person's age; be semantic
let age = 19;
// Write code that will print out "Here are the keys!", 
//      if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if(age >= 16){
console.log("Here are the keys!")
}
else{
console.log("Sorry, you're too young.")
}


console.log("\nII. Loops\n")

// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

console.log("\nA. The basics\n")

// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i=0; i<=10; i++){console.log(i)}
// Write a loop that will print out all the numbers from 10 up to and including 400
for(let i=10; i<=400; i++){console.log(i)}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i=12; i<=4000; i+=3){console.log(i)}


console.log("\nB. Get even\n")

// Print out the numbers that are within the range of 1 - 100
for(let i=1; i<=100; i++){console.log(i)}
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i=1; i<=100; i++){
    if(i%2==0){
        console.log(i + "<-- is an even number")
    }
    else{console.log(i)}
}


console.log('\nC. Give me Five\n')

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
for(let i=0; i<=100; i++){
    if(i%5==0){
        console.log(`I found a ${i} number. High five!`)
    }
}

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages

for(let i=0; i<=100; i++){
    if(i%5==0){
        console.log(`I found a ${i} number. High five!`)
    }
    
    if(i%3 == 0){
        console.log(`I found a ${i}. Three is a crowd`)
    }
}


console.log('\nD. Savings account\n')

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account =0;
for(let i=1; i<=10; i++)(
    bank_account+=i
)
// Check your work! Your bank_account should have $55 in it.
console.log(bank_account)
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
bank_account =0;
for(let i=1; i<=100; i++)(
    bank_account+= (i*2)
)
console.log(bank_account)




console.log('\nIII. Arrays & Control flow\n')

console.log('\nA. Talk about it:\n')

// What are the things in an array called? ===> elements
// Do Arrays guarantee those things will be in order?  ===> they will be saved as the way they are typed in
// What real-life thing could you model with an array? ===> kinds of animals, people's names, numbers, 



// B. Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes
let arrayB = ['"The greatest glory in living lies not in never falling, but in rising every time we fall". - Nelson Mandela',
            '"The way to get started is to quit talking and begin doing." -Walt Disney', 
            '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teres"']

            
console.log('\nC. Accessing elements\n') 

// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
console.log(randomThings[0])
// Change the value of "Hello" to "World"
randomThings[randomThings.indexOf['Hello']] = "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)


console.log("\nD. Change values\n")

// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
randomThings[randomThings.indexOf['Github']] = "Octocat"
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass)

console.log("E. Mix It Up\n")

// Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]
// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon")
myArray.push("meow")
// Remove the 5 from the beginning of the array.
myArray.shift()
console.log(myArray)
// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley")
// Remove the string of your choice from the end of the array. ????????????????????
myArray.splice(-3,1)  // remove 20
console.log(myArray)
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
myArray.reverse()
console.log(myArray)


console.log("\nF. Biggie Smalls\n")

// Create a variable that contains an integer.
let intVar = 8;
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
if(intVar < 100){
    console.log("little number")
}
else{
    console.log("big number")
}


console.log("\nG. Monkey in the Middle\n")

// Write an if ... else if ... else statement:

// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey". 
if(intVar < 5){
    console.log("little number")
}
else if (intVar > 10) {
    console.log("big number")
}
else {
    console.log("monkey")
}



console.log("\nH. What's in Your Closet?\n")

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today")
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
let idx = kristynsCloset.indexOf("yellow knit hat")
kristynsCloset.splice(idx+1,0,"raybans")
console.log(kristynsCloset)
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[idx] = "stained knit hat";
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])
// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0])
// Access one item from Thom's accessories array.
console.log(thomsCloset[2][0])
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a grey ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[1][0]}!`)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2]= 'Footie Pajamas'
console.log(thomsCloset)

// IV. Functions



console.log('\nA. printGreeting\n')

// Do you think you could write a function called printGreeting with a parameter name that returns a 
// greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

function printGreeting (name){
    console.log('Hello there, ' + name + '!')
}

printGreeting('John')

console.log('\nB. printCool\n')

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
function printCool (name){
    console.log(name + ' is cool')
}
printCool('Jack')

// C. calculateCube

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// console.log(calculateCube(5));
// => 125
function calculateCube (sideLength){
    console.log(sideLength**3)
}
calculateCube(5)


console.log('\nD. isVowel\n')

// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. 
// Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// console.log(isVowel("a"));
// => true
isVowel = function(character){
    character = character.toLowerCase()
    let vowels = ['a','e','i','o','u']
    for(let i=0; i<=vowels.length; i++){
        if(character == vowels[i]){
            return true
        }
    }
    return false
}
console.log(isVowel('a'))
console.log(isVowel('b'))



console.log('\nE. getTwoLengths\n')

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

getTwoLengths = function(string1, string2){
    return [string1.length, string2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"))



console.log("\nF. getMultipleLengths\n")

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
getMultipleLengths = function(arrayOfStrings){
    let answer = []
    for(let i=0; i<arrayOfStrings.length; i++){
        answer.push(arrayOfStrings[i].length)
    }
    return answer
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))


console.log("\nG. maxOfThree\n")

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
maxOfThree = (num1, num2, num3)=>{
    // function maxOfTwo(n1,n2){
    //     return n1>=n2 ? n1:n2 
    // }
    // return maxOfTwo(maxOfTwo(num1,num2), num3)
    
}
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(4, 4, 4));
console.log(maxOfThree(7, 8, 10));



console.log('\nH. printLongestWord\n')

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
function printLongestWord (arrayOfStrings) {
    let lengthsArray = arrayOfStrings.map((a)=>a.length)  // result is an array containing the length for each string given
    let greatestNumber = lengthsArray.reduce((a,b)=> a>=b ? a:b) // and this will return the greatest number in the array
    let idx = lengthsArray.indexOf(greatestNumber)   // index of the greatest number
    return arrayOfStrings[idx]
}

let arrayOfStrings = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]
                   
console.log(printLongestWord(arrayOfStrings))






console.log("\nObjects\n")

// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, 
// and we want to store that user's data. The object data structure is a good way to organize the data from our user.

console.log("\nA. Make a user object\n")

// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an 
// empty array []. Set the other values to whatever you would like.
let user = {name:"John Doe", 
            email:"email@example.com", 
            age: 18, purchased:[]};


console.log("\nB. Update the user\n")

// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
let newEmail = "new-email@example.com"
user.email = newEmail
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age+=1
console.log(user)


console.log("\nC. Adding keys and values\n")

// You have decided to add your user's location to the data that you want to collect.

// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "123 Main st, Cincinnati, OH, 09877"

console.log(user)

console.log("\nD. Shopaholic!\n")


// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
// Console.log just the "Merino jodhpurs" from the purchased array.
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2])


console.log("\nE. Object-within-object\n")

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
// Console.log just "A latte" from the friend's purchased array.
user.friend = {
        name: "Grace Hopper",
        age: 85,
        location: "Somewhere in the world",
        purchased: []
    }
console.log(user.friend.name)
console.log(user.friend.location)

user.friend.age = 35;
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")
console.log(user.friend.purchased[1])



console.log("\nF. Loops\n")

// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

console.log("User's purchased items:")
for(let i=0; i<user.purchased.length; i++){
    console.log(user.purchased[i])
}

console.log("Friend's purchased items:")
for(let i=0; i<user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}

// G. Functions can operate on objects

// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
updateUser = ()=>{
    user.age++
    user.name = user.name.toUpperCase()
}

updateUser()
console.log(user)

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
oldAndLoud = (person) =>{
    person.age++
    person.name = user.name.toUpperCase()
}

oldAndLoud(user)
console.log(user)



console.log('\n// Requirements Complete! Hungry for More?\n')

console.log('\n// Cat Combinator\n')

// 1. Mama cat

// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
let cat1= {
    name: "Lala",
    breed: "Maine Coon",
    age: 2
}
console.log(cat1.age) 
console.log (cat1.breed) 


// 2. Papa cat

// Define an object called cat2 that also contains the properties:

// name
// breed
// age (a number)
let cat2= {
    name: "papa",
    breed: "Birman",
    age: 4
}


console.log('\n3. Combine Cats!\n')

// The cats are multiplying!

// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
// Example:

// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }
// This is to demonstrate that functions can take objects as arguments

// combineCats = function(mama, papa) {
//     console.log(mama)
//     console.log(papa)
// }

//console.log(combineCats(cat1, cat2))
// You could also invoke the combineCats function by writing the objects straight into the parentheses:

//console.log(combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" }));

// Make it so the combineCats function will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:

// console.log(combineCats(cat1, cat2));
// Result:

// { name: "JoeJam', age: 1, breed: 'Mog-Siamese' }

// This is to demonstrate that a function can return an object
combineCats = function(mama, papa) {
    //console.log(mama)
    //console.log(papa)
   return {
    name: mama.name + papa.name,
    age: 1,
    breed: mama.breed+'-'+papa.breed
   }
}
console.log(combineCats(cat1,cat2));




console.log("\n4. Cat brain bender\n")

// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:

// catCombinator can use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:
console.log( combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)))   );


console.log(false == "0")  // --> true
console.log(false === "0") // --> false

console.log(null>=0)
console.log(null==0)
console.log(null>0)
alert(null>=0)
