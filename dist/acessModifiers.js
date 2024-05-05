"use strict";
{
    // Access Modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance += amount;
        }
        getBalance() {
            return `Totla Balance is ${this._balance}`;
        }
    }
    class StudentAccount extends BankAccount {
    }
    const goribAccount = new BankAccount(111, "X", 50);
    //   goribAccount.balance = 0; //Property 'balance' is private and only accessible within class 'BankAccount'.
    goribAccount.addDeposit(50);
    const myBalace = goribAccount.getBalance();
    console.log(myBalace);
}
