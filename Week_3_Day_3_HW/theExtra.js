// parent class BankAccount
class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
        this.last4Digits = (acctNum % 10000).toString().padStart(4, '0'); // last 4 digits of the account number 
    }
    deposit(dollarAmount) {  // deposit method adds the amount of dollar to balance and logs the new balance
        this.balance = this.balance + dollarAmount;

        console.log(`Deposited to account # ending in ...${this.last4Digits}: ${this.moneyFormatter(dollarAmount)}`)
        console.log(`New balance: ${this.moneyFormatter(this.balance)}\n`)
    }
    withdraw(dollarAmount) {  // withraw method substracts the amount of dollar from balance and logs the new balance
        this.balance = this.balance - dollarAmount;
        console.log(`Withdrawal from account # ending in ...${this.last4Digits}: ${this.moneyFormatter(dollarAmount)}`)
        console.log(`New balance: ${this.moneyFormatter(this.balance)}\n`)
    }

    // Create currency number formatter to print as $x,xxx,xxx.xx
    moneyFormatter(moneyNumber) {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            // minimumFractionDigits: 0, // (prints 2500.10 as $2,500.1)
            // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
        return formatter.format(moneyNumber);
    }
}

// class for the Checking Account (parent class: BankAccount)
//      property:   overdraftEnabled
//      method:     overrides the withdraw() to add the overdraftEnabled feature
class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled = false) {
        super(ownerName, balance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }
    // Override withdraw to implement overdraft feature
    withdraw(dollarAmount) {
        if (this.overdraftEnabled == true) {
            if (this.balance < dollarAmount) {
                console.log("No Enough Balance!")
                console.log(`Current balance: ${super.moneyFormatter(this.balance)}`)
                console.log(`Widrawal Request: ${super.moneyFormatter(dollarAmount)}\n`)
            }
            else {
                super.withdraw(dollarAmount)
            }
        }
    }
}

//// class for the Saving Account (parrent class: BankAccount)

class SavingsAccount extends BankAccount {
    //Override withdraw to disallow withdrawals completely :)
    withdraw() {
        console.log("WARNING! Withdrawal is NOT allowed from the saving account.\n")
    }
}

// ######################### TEST


// generates random 12-digit number for account numbers
function accountNumGenerator() {
    return Math.floor(Math.random() * 1000000000000);
}

// create new instances of checking and saving accounts
let checking1 = new CheckingAccount('John Doe', 50000, accountNumGenerator(), true)
let saving1 = new SavingsAccount('John Doe', 10000, accountNumGenerator())

console.log(checking1)
console.log(saving1)

// Test case1: withdraw from checking for dollarAmount < balance
let dollarAmount = 578;
checking1.withdraw(dollarAmount);

// Test case2: withdraw from checking for dollarAmount > balance
dollarAmount = 5780000;
checking1.withdraw(dollarAmount);

// Test case3: deposit to checking for any dollarAmount 
dollarAmount = 700.10;
checking1.deposit(dollarAmount);

// Test case4: withdraw from saving for any dollarAmount 
dollarAmount = 800;
saving1.withdraw(dollarAmount);

// Test case5: deposit to savingsfor any dollarAmount 
dollarAmount = 77;
saving1.deposit(dollarAmount);


