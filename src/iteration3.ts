class BankAccount {
  balance: number = 0;

  deposit(amount: number): string | number {
    if (amount <= 0) return "Please provide a valid amount";
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): string | number {
    if (amount <= 0) return "Please provide a valid amount.";
    if (amount > this.balance) return "Insufficient funds.";
    this.balance -= amount;
    return this.balance;
  }
}
