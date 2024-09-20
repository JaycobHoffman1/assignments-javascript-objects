// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
};
Account.prototype.displayAccountDetails = function() {
    console.log(`Account number: ${this.accountNumber}, Balance: ${this.balance}, Owner: ${this.owner}`);
}
const myAccount = new Account("0001", 2000, "Jaycob Hoffman");
myAccount.displayAccountDetails();
console.log("Task 1 complete!");
// Task 2: Implement methods within the Account object to deposit and withdraw funds.
Account.prototype.makeDeposit = function(amount) {
    this.balance += amount;
    console.log("Deposit complete!");
};
Account.prototype.makeWithdrawal = function(amount) {
    if (amount > this.balance) {
        console.log("Unable to make withdrawal due to insufficient funds.");
        return;
    }
    this.balance -= amount;
    console.log("Withdrawal complete!");
};
myAccount.makeDeposit(500);
myAccount.displayAccountDetails();
myAccount.makeWithdrawal(2600);
myAccount.makeWithdrawal(1600);
myAccount.displayAccountDetails();
console.log("Task 2 complete!");
// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.
Number.prototype.round = function(decimals) { // This function rounds to 2 decimal places (from StackOverflow)
    return Number((Math.round(this + "e" + decimals)  + "e-" + decimals));
};
Account.prototype.calculateCompoundInterest = function(interestRate, timesInterestApplied, timePeriodsElapsed) {
    compoundInterest = (this.balance * Math.pow(1 + interestRate / timesInterestApplied, timesInterestApplied * timePeriodsElapsed)).round(2);
    console.log(`The compound interest is $${compoundInterest}.`);
};
const interestRate = 0.04;
const timesInterestApplied = 4;
const timePeriodsElapsed = 3;
myAccount.calculateCompoundInterest(interestRate, timesInterestApplied, timePeriodsElapsed);
console.log("Task 3 complete!");