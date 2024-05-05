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

    addDeposit(amount: number) {
      this._balance += amount;
    }
    getBalance(): string {
      return `Totla Balance is ${this._balance}`;
    }
  }

  const goribAccount = new BankAccount(111, "X", 50);
  //   goribAccount.balance = 0; //Property 'balance' is private and only accessible within class 'BankAccount'.
  goribAccount.addDeposit(50);
    const myBalace = goribAccount.getBalance();
    console.log(myBalace);
}
