{
  // Access Modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    private balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addDeposit(amount: number) {
      this.balance += amount;
    }
  }

  const goribAccount = new BankAccount(111, "X", 50);
  //   goribAccount.balance = 0; //Property 'balance' is private and only accessible within class 'BankAccount'.
  const newMoney = goribAccount.addDeposit(50);
  console.log(newMoney);
}
