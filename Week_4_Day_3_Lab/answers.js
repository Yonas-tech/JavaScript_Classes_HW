// Getting Started

// Create a javascript file inside your homework folder that you will make for today to record your answers (maybe name it answers.js)
// Keep your answers organized! Included a commented header for each section in your answers file. Something like the following:
// ////////////////////////////////
// // Easy Going
// ////////////////////////////////


// ////////////////////////////////
// // Get Even
// ////////////////////////////////


// ////////////////////////////////
// // Fizz Buzz
// ////////////////////////////////


// ////////////////////////////////
// // Wild Wild Life
// ////////////////////////////////


// ////////////////////////////////
// // Yell at the Ninja Turtles
// ////////////////////////////////


// ////////////////////////////////
// // Methods, Revisited
// ////////////////////////////////


// ////////////////////////////////
// // Where is Waldo
// ////////////////////////////////


// ////////////////////////////////
// //  Excited Kitten
// ////////////////////////////////


// ////////////////////////////////
// //  Find the Median
// ////////////////////////////////

// TEST YOUR WORK! Make sure that your code works node name_of_your_file.js.
// If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later. 
// You may find some later problems easier or need a break from what you're working on and set some fresh eyes on something you've been stuck on.
// After each section (even if you're not fully done with it), add and commit your work.
// Please use the commit messages that you see at the end of each section (modify it if you need to ie checkers almost solved). 
// We will see these messages on Github. It will help us to see your progress. If you go back and fix a section, commit again with an updated message.

// When you are done with your homework, push it to your origin (this is your Github) and make an issue on our repo.
// Final note: You are not alone! Everyone else in the class is working on this as well. Send Slack messages, make a Zoom channel, or meet with the TA to discuss sticking points.



// //////////////////////////////////////////////////////////////////
// Part I: HTML & CSS
// //////////////////////////////////////////////////////////////////

// Prepare yourself for tomorrow's morning exercise! Watch the following videos on HTML and CSS. You will be working on practicing CSS in your Morning Exercise.

// Rank you comfort with the following material on a scale of 0 - 5:

// 0 - I have no idea what it is

// 1 - I am not sure

// 2 - I am shakey, I could use a refresher

// 3 - I almost feel like I've got it

// 4 - I feel pretty good about the material, but some extra review would help

// 5 - I got this! I am ready to code

// Based on your self-assessed score, watch the appropriate video(s)

// The videos are between 5 - 15 minutes long


// HTML Intro (tags, content, attributes, semantic HTML)     -->

// HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos) --> 

// CSS Intro (including css files in HTML, elements)    -->

// CSS Basics (colors, background, font properties)  -->




console.log('///////////////////////////////////')
console.log('// Part II: JavaScript Reps')
console.log('// ////////////////////////////////\n')

console.log('// Easy Going\n')

// Write a for loop that will log the numbers 1 through 20.

for(let i=1; i<=20; i++) console.log(i)

// 🔴 The commit message should read: 
// "Easy Going answered"


console.log('// \nGet Even')

// Write a for loop that will log only the even numbers in 0 through 200.
// for(let i=0; i<=200; i++)  i%2==0 ? console.log(i + " is even") : console.log(i + " is not odd")
for(let i=0; i<=200; i++){
    if(i%2==0){
        console.log(i)
    }
}

// Hint: Think about the increment expression.
// 🔴 The commit message should read: 
// "Get Even answered"


console.log('\n// Fizz Buzz\n')

// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for(let i=1; i<=100; i++){
    if(i%3==0 && i%5!= 0){
        console.log(i+" Fizz")
    }
    else if(i%5==0 && i%3!=0){
        console.log(i+" Buzz")
    }
    else if(i%3==0 && i%5==0){
        console.log(i+" FizzBuzz")
    }
}

// 🔴 The commit message should read: 
// "Fizz Buzz answered"
// Wild Wild Life

// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// 🔴 The commit message should read: 
// "Wild Wild Life answered"
// Yell at the Ninja Turtles

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

// 🔴 The commit message should read: 
// "Yell at the Ninja Turtles answered"
// Methods, Revisited

// Here is a list of favMovies:

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// Use the method pop
// push "Guardians of the Galaxy"
// Reverse the array
// Use the shift method
// unshift - what does it return?
// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// console.log your final results
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

// 🔴 The commit message should read: 
// "Methods Revisited answered"
// Where is Waldo

// With the following multi-dimensional array
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"
// 🔴 The commit message should read: 
// "Where is Waldo answered"
// Excited Kitten

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint 1
// Hint 2
// Hint 3
// Hint 4
// Hint 5
// Hint 6
// Image of cat with funny quote about dot

// 🔴 The commit message should read: 
// "Excited Kittens answered"
// Find the Median

// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15
// 🔴 The commit message should read: 
// "Find the Median answered"
// Hungry for More?

// Choose one that you didn't get to solve in lab

// Fibonnacci (morning lab)

// Checkerboard (morning lab)

// TwoDArray (afternoon lab)

// Finish all 3 Lab Questions

// Return of the Closets

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// Alien Attire

// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// Dress Us Up

// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
// 🔴 The commit message should read: 
// "Kristyn and Thom have their outfits ready for class - array practice"
// Dirty Laundry

// Continue looking at the closet arrays:

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
// Inventory

// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
// 🔴 The commit message should read: 
// "Hungry for More: I tackled..."
