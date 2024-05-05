{
  // Getter and Setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //   setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    /* public addDeposit(amount: number) {
      this._balance += amount;
    } */

    //   ------------------
    //   getter
    get balance() {
      return this._balance;
    }

    /* public getBalance(): string {
      return `Totla Balance is ${this._balance}`;
    } */
  }
  const goribAccount = new BankAccount(111, "X", 50);
  /* 
  
  goribAccount.addDeposit(50); // i need to call the function
  const myBalace = goribAccount.getBalance(); // i need to call the function 
  */
  //   goribAccount.addDeposit = 0;
    const myBalace = goribAccount.balance; //using like property
    const myNewBalance = goribAccount.deposit = 30
  console.log(myNewBalance);
}
