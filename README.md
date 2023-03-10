# JavaScript_Classes_HW
## Static Methods and Properties

There are two JavaScript files in this folder: script.js and theExtra.JS 

## script.js (my soluction the first section)

There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
log the properties and test the methods (don't instantiate)
```
class Governor {

}
```

**Inheritance**

Your base class
```
Person{
    constructor(){

    }
}
```
Think of three properties all people share, set them with the constructor
Think of three methods all people share
Create a PostalWorker class that inherits from person, add some methods
Create a Chef class that inherits from person, add some methods
Create 2 PostalWorkers and 2 Chefs, log them and test all their methods


## theExtra.js (my solution for the following section)
### Hungry for More 

### Hungry For More (Only do this if all your hw above is done)

Bank Accounts take it a step further

|**BankAccount class**:                                                 |
|-----------------------------------------------------------------------|
|Derived From	|Properties	                        |Methods            |
|---------------|-----------------------------------|-------------------|
|n/a	        |    ownerName, balance, acctNum    | deposit, withdraw |
|               | (generated in constructor         |                   |
|               | - not passed in)	                |                   |

|**CheckingAccount class:**                             |
|-------------------------------------------------------|
|Derived From	|Properties	        |Additional Methods |
|---------------|-------------------|-------------------|
|BankAccount    |    overdraftEnabled  | Override withdraw to |
|               |                    | implement overdraft feature |


|**SavingsAccount class:**                                                 |
|-----------------------------------------------------------------------|
|Derived From	|Properties	        |Methods            |
|---------------|-------------------|-------------------|
|BankAccount    |  none             | Override withdraw to |
|               |                   | disallow withdrawals completely :)  |
