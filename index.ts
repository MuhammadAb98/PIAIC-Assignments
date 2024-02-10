class Bank {
  private accounts: { [accountNumber: string]: number };

  constructor() {
    this.accounts = {};
  }

  createAccount(accountNumber: string, initialBalance: number): void {
    if (!this.accounts[accountNumber]) {
      this.accounts[accountNumber] = initialBalance;
      console.log(`Account ${accountNumber} created with initial balance: $${initialBalance}`);
    } else {
      console.log(`Account ${accountNumber} already exists.`);
    }
  }

  deposit(accountNumber: string, amount: number): void {
    if (this.accounts[accountNumber] !== undefined) {
      this.accounts[accountNumber] += amount;
      console.log(`$${amount} deposited into account ${accountNumber}. New balance: $${this.accounts[accountNumber]}`);
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }

  withdraw(accountNumber: string, amount: number): void {
    if (this.accounts[accountNumber] !== undefined) {
      if (amount <= this.accounts[accountNumber]) {
        this.accounts[accountNumber] -= amount;
        console.log(`$${amount} withdrawn from account ${accountNumber}. New balance: $${this.accounts[accountNumber]}`);
      } else {
        console.log(`Insufficient funds in account ${accountNumber}.`);
      }
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }

  checkBalance(accountNumber: string): void {
    if (this.accounts[accountNumber] !== undefined) {
      console.log(`Account ${accountNumber} balance: $${this.accounts[accountNumber]}`);
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }
}

// Run the Bank
const bank = new Bank();
bank.createAccount("12345", 1000);
bank.deposit("12345", 500);
bank.withdraw("12345", 200);
bank.checkBalance("12345");
