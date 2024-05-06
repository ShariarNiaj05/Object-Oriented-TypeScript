"use strict";
{
    //
    // by using private and protected, Encapsulation  automatically used in oop
    class BankAccount {
        constructor(id, name, balance, taka) {
            this.id = id;
            this.name = name;
            this._balance = balance;
            this._taka = taka;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this.
            ;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20, 50);
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance(); //Property 'getBalance' is private and only accessible within class 'BankAccount'.
    console.log(myBalance);
    //
}
