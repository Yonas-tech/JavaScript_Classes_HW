// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)

class Governor {
  static officeColor = 'white';
  static yearInOffice = 3;

  static vetoCurrentBill() {
    console.log("Let's trash it! ")
  }
  static reviewReports() {
    console.log('Reading ... ')
  }
}

// Your base class

class Person {
  //constructor
  constructor(firstName, age, eyeColor, height) {
    // data type checking for the arguments 
    if (typeof firstName != 'string') {
      console.log("WARNING! 'firstName' must be of type number ")
    }
    else if (typeof age != 'number' || age <= 0) {
      console.log("WARNING! Incorect 'age' assigment value!")
    }
    else if (typeof eyeColor != 'string') {
      console.log("WARNING! 'eyeColor must be of type string")
    }
    else if (typeof height != 'string') {
      console.log("WARNING! 'height' must be of type number")
    }
    else {    // if the data types are good, the we assign the arguments to the object
      this.firstName = firstName;
      this.age = age;
      this.eyeColor = eyeColor;
      this.height = height;
    }
  }
  //methods
  eat() {
    console.log('Yam yam')
  }
  walk() {
    console.log('Walking ...')
  }
  greet() {
    console.log('Hello there!')
  }
}

// let eyeColors = ['amber', 'blue', 'brown', 'gray', 'green', 'hazel', 'red']
// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

// PostalWorker class:
class PostalWorker extends Person {
  constructor(firstName, age, eyeColor, height, isHoldingMail = true) {
    super(firstName, age, eyeColor, height);
    this.isHoldingMail = isHoldingMail;
  }
  deliverMail() {
    console.log('... let me see the address first!');
  }
  certifyMail() {
    console.log('Your total is $4.15')
  }
}

// Chef Class:
class Chef extends Person {
  constructor(firstName, age, eyeColor, height, isWearingToque){
    super(firstName, age, eyeColor, height);
    this.skills = ['KNIFE SKILLS','SAUTEEING',
                   'ROASTING','BLANCHING','EMULSIFICATION'];
    this.isWearingToque = isWearingToque || true;
    this.randomQuotes = [
      "My gran could do better! And she's dead!", // - Gordon Ramsay
      "For what we are about to eat, may the Lord make us truly not vomit.", // - Gordon Ramsay
      "This lamb is so undercooked, it's following Mary to school!", // - Gordon Ramsay
      "This pizza is so disgusting, if you take it to Italy you'll get arrested.", // - Gordon Ramsay
      "I don't categorize food as bad or a guilty pleasure.", // -  Rachael Ray
      "I cook with wine. Sometimes I even add it to the food." // – W.C. Fields
    ]
  }

  
  cook() {
    let idx = Math.floor(Math.random()*this.randomQuotes.length);
    console.log(this.randomQuotes[idx])
  }
  chop(item) {
    console.log(`Choping the ${item}.`)
  }
}

// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

console.log(Governor)

let postalWorker1 = new PostalWorker('Mike', 25, 'Brown', '5\'9"', false);
console.log(`First Postal worker:`)
console.log(postalWorker1)
postalWorker1.certifyMail()

let postalWorker2 = new PostalWorker('Bryan', 25, 'hazel', `5'4"`, false);
console.log(`Second Postal worker:`)
console.log(postalWorker2)
postalWorker1.deliverMail()

let chef1 = new Chef('Gordon', 56, 'Blue', `6'2"`, false);
console.log('First Chef:');
console.log(chef1);
chef1.cook()

let chef2 = new Chef('Thomas', 58, 'Black', `5'11"`, true);
console.log('Second Chef:');
console.log(chef2);
chef2.chop("meet");







