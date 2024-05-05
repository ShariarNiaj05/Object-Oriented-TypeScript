{
  // Access Modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance += amount;
    }
    public getBalance(): string {
      return `Totla Balance is ${this._balance}`;
    }
  }

  class StudentAccount extends BankAccount {
    // private _balance: number => is not accessible in the StudentClass. I need to change the type private to protected to access the _balance.
    // ===>  protected _balance: number;
  }

  const goribAccount = new BankAccount(111, "X", 50);
  //   goribAccount.balance = 0; //Property 'balance' is private and only accessible within class 'BankAccount'.
  goribAccount.addDeposit(50);
  const myBalace = goribAccount.getBalance();
  console.log(myBalace);
}
