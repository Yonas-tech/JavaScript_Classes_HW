// /Week 4 - Day 4 - Lecture/Lab - Classes & JS Review
// Section 1

console.log('// Creating Classes & Factories')

console.log('/////////////////////////////////////////')
console.log('\n// Hamster\n')
console.log('/////////////////////////////////////////')

// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price
// 🔴 Hard Mode Save & Commit your work! 
// Your commit message should read something like: 
// "created hamster class"
// Easy Mode Make sure it works so far

class Hamster {
    constructor(name) {
        this.owner = ''
        this.name = name
        this.price = 15
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }

    // I am creating the folling method to set the Hamster's owner name
    setOwner(owner){
        this.owner = owner
    }
}


console.log('/////////////////////////////////////////')
console.log('// Person')
console.log('/////////////////////////////////////////')

// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
// 🔴 Hard Mode Save & Commit your work! 
// Your commit message should read something like: 
// "created person class"
// Easy Mode Keep Going and save and run code

class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`I am ${this.name} hello`)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}

// Create a Story with your Person class

// Feel free to update or add methods to automate some of these tasks.
// Instantiate a new Person named Timmy
let person1 = new Person("Timmy")
// Age Timmy five years
for (let i=0; i<5; i++) {person1.ageUp()}
console.log(person1)
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for (let i=0; i<5; i++) {person1.eat()}
console.log(person1)
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
for (let i=0; i<5; i++) {person1.exercise()}
console.log(person1)
// Age Timmy 9 years
for (let i=0; i<9; i++) {person1.ageUp()}
console.log(person1)
// Create a hamster named "Gus"
let hamsterGus = new Hamster("Gus")
// Set Gus's owner to the string "Timmy"
hamsterGus.setOwner("Timmy")             // I created this method
// Have Timmy "buy" Gus
person1.buyHamster(hamsterGus)
// Age Timmy 15 years
for (let i=0; i<15; i++) {person1.ageUp()}
console.log(person1)
// Have Timmy eat twice
for (let i=0; i<2; i++) {person1.eat()}
console.log(person1)
// Have Timmy exercise twice
for (let i=0; i<2; i++) {person1.exercise()}
console.log(person1)
// 🔴 Hard Mode Save & Commit your work! 

// Your commit message should read something like: 
// "created timmys story" Easy Mode Keep Going Save and Run Code

// const timmy = new Person('Timmy')
// for(let i =0; i < 5; i++){
//   timmy.ageUp()
// }
// for(let i =0; i < 5; i++){
//   timmy.eat()
// }
// for(let i =0; i < 5; i++){
//   timmy.exercise()
// }
// for(let i =0; i < 9; i++){
//   timmy.ageUp()
// }
// const gus = new Hamster('Gus')
// gus.owner = 'Timmy'
// timmy.buyHamster(gus)

// for(let i =0; i < 15; i++){
//   timmy.ageUp()
// }
// timmy.eat()
// timmy.eat()
// timmy.exercise()
// timmy.exercise()


console.log('/////////////////////////////////////////')
console.log('// Chef Make Dinners\n')
console.log('/////////////////////////////////////////')

class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }

}

class Chef {
    constructor(){
        this.preparedDinners = [] 
    }
    prepareDinner(appetizer, entree, dessert){
        this.preparedDinners.push(new Dinner(appetizer, entree, dessert))
        return this.chefMunu
    }
}

// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
// The only thing important here is that student recognizes that the Chef should produce dinners
// No wrong answers as long as the Chef can produce dinners
// Chef should have an array of dinners

let gordonRamsay = new Chef()
gordonRamsay.prepareDinner('Balsamic Bread Dip','Creamy Lemon Chicken Piccata','Tiramisu')
gordonRamsay.prepareDinner('Classic Wedge Salad','Cedar Plank Salmon','Apple Cobbler')
gordonRamsay.prepareDinner('Deviled Eggs','Cooker Ribs often','Texas Sheet Cake')
console.log(gordonRamsay)

// Part 1 is about following instructions, part 2 is purposefully ambiguous, as a dev you need to be able to do both

// 🔴 Hard Mode Save & Commit your work! 
// Your commit message should read something like: 
// "Dinner is served" Easy Mode Keep Going Save and Run Your Code


