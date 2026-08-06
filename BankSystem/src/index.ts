import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

export interface Transaction {
    amount: number;
    date: Date;
    type: "DEPOSIT" | "WITHDRAWAL" | "INTEREST" | "FEE" | string;
    description?: string;
}

export abstract class BankAccount {
    private static totalAccounts: number = 0;

    public readonly accountNumber: string;
    private _ownerName: string;
    protected _balance: number;

    protected transactionHistory: Transaction[];

    constructor(
        accountNumber: string,
        ownerName: string,
        initialBalance: number,
    ) {
        this.accountNumber = accountNumber;
        this._ownerName = ownerName;
        this._balance = initialBalance;
        this.transactionHistory = [];

        BankAccount.totalAccounts++;

        if (initialBalance > 0) {
            this.transactionHistory.push({
                amount: initialBalance,
                date: new Date(),
                type: "DEPOSIT",
                description: "Initial deposit",
            });
        }
    }

    public static getTotalAccounts(): number {
        return BankAccount.totalAccounts;
    }

    public get ownerName(): string {
        return this._ownerName;
    }

    public set ownerName(newName: string) {
        if (!newName || newName.trim().length === 0) {
            throw new Error("Owner name cannot be empty.");
        }
        this._ownerName = newName;
    }

    public get balance(): number {
        return this._balance;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this._balance += amount;
        this.transactionHistory.push({
            amount,
            date: new Date(),
            type: "DEPOSIT",
        });
        console.log(`Deposited $${amount}. New balance is $${this._balance}`);
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > this._balance) {
            throw new Error("Insufficient balance");
        }
        this._balance -= amount;
        this.transactionHistory.push({
            amount,
            date: new Date(),
            type: "WITHDRAWAL",
        });
        console.log(`Withdrew $${amount}. New balance is $${this._balance}`);
    }

    public getBalance(): number {
        return this.balance;
    }

    public printTransactionHistory(): void {
        console.log(
            `\n--- Transaction History for Account: ${this.accountNumber} (${this.ownerName}) ---`,
        );
        for (const transaction of this.transactionHistory) {
            console.log(
                `[${transaction.date.toISOString()}] ${transaction.type}: $${transaction.amount} ${transaction.description ? `(${transaction.description})` : ""}`,
            );
        }
        console.log(`Current Balance: $${this.balance}`);
    }

    public abstract calculateYearlyBenefit(): number;
}

export class SavingsAccount extends BankAccount {
    public interestRate: number;

    constructor(
        accountNumber: string,
        ownerName: string,
        initialBalance: number,
        interestRate: number = 0.5,
    ) {
        super(accountNumber, ownerName, initialBalance);
        this.interestRate = interestRate;
    }

    public addInterest(): void {
        const interest = this.balance * this.interestRate;
        this.deposit(interest);
        this.transactionHistory[this.transactionHistory.length - 1]!.type =
            "INTEREST";
        this.transactionHistory[
            this.transactionHistory.length - 1
        ]!.description = `Interest added at ${this.interestRate * 100}%`;
        console.log(`New balance is $${this.balance}`);
    }

    public calculateYearlyBenefit(): number {
        return this.balance * this.interestRate;
    }
}

export class CurrentAccount extends BankAccount {
    public overdraftLimit: number;

    constructor(
        accountNumber: string,
        ownerName: string,
        initialBalance: number,
        overdraftLimit: number = 100,
    ) {
        super(accountNumber, ownerName, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > this.balance + this.overdraftLimit) {
            throw new Error("Insufficient amount");
        }

        this._balance -= amount;

        this.transactionHistory.push({
            amount,
            date: new Date(),
            type: "WITHDRAWAL",
            ...(this._balance < 0 && { description: "Overdraft utilized" }),
        });
        console.log(`Withdrew $${amount}. New balance is $${this._balance}`);
    }

    public calculateYearlyBenefit(): number {
        return 0;
    }
}

const rl = readline.createInterface({ input, output });
const accounts: BankAccount[] = [];

async function main() {
    console.log("Bank Account Management System");
    let running = true;

    while (running) {
        console.log("1. Create Account");
        console.log("2. Deposit");
        console.log("3. Withdraw");
        console.log("4. Print Transaction History");
        console.log("5. Calculate Yearly Benefit");
        console.log("6. Exit");

        const choice = await rl.question("Enter your choice: ");

        try {
            switch (choice.trim()) {
                case "1":
                    await createAccount();
                    break;
                case "2":
                    await deposit();
                    break;
                case "3":
                    await withdraw();
                    break;
                case "4":
                    await printHistory();
                    break;
                case "5":
                    await calculateBenefit();
                    break;
                case "6":
                    console.log("Goodbye");
                    running = false;
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        } catch (error: any) {
            console.error(`Error: ${error.message}`);
        }
    }
    rl.close();
}

async function createAccount() {
    const type = await rl.question("Enter account type (1 : SA, 2 : CA): ");

    if (type !== "1" && type !== "2") {
        console.log("Invalid account type.");
        return;
    }

    const nextId = BankAccount.getTotalAccounts() + 1;
    const accountNumber =
        (type === "1" ? "SA-" : "CA-") + nextId.toString().padStart(4, "0");
    console.log(`Account number: ${accountNumber}`);

    const ownerName = await rl.question("Enter owner name: ");
    const initialBalanceStr = await rl.question("Enter initial balance: ");
    const initialBalance = parseFloat(initialBalanceStr);

    if (isNaN(initialBalance)) {
        throw new Error("Invalid balance.");
    }

    if (type === "1") {
        const account = new SavingsAccount(
            accountNumber,
            ownerName,
            initialBalance,
        );
        accounts.push(account);
        console.log(`Savings Account [${accountNumber}] created successfully.`);
    } else if (type === "2") {
        const account = new CurrentAccount(
            accountNumber,
            ownerName,
            initialBalance,
        );
        accounts.push(account);
        console.log(`Current Account [${accountNumber}] created successfully.`);
    }
}

function findAccount(accountNumber: string): BankAccount {
    const account = accounts.find((a) => a.accountNumber === accountNumber);
    if (!account) {
        throw new Error("Account not found.");
    }
    return account;
}

async function deposit() {
    const accountNumber = await rl.question("Enter account number: ");
    const account = findAccount(accountNumber);
    const amountStr = await rl.question("Enter deposit amount: ");
    const amount = parseFloat(amountStr);

    if (isNaN(amount)) throw new Error("Invalid amount.");

    account.deposit(amount);
}

async function withdraw() {
    const accountNumber = await rl.question("Enter account number: ");
    const account = findAccount(accountNumber);
    const amountStr = await rl.question("Enter withdrawal amount: ");
    const amount = parseFloat(amountStr);

    if (isNaN(amount)) throw new Error("Invalid amount.");

    account.withdraw(amount);
}

async function printHistory() {
    const accountNumber = await rl.question("Enter account number: ");
    const account = findAccount(accountNumber);
    account.printTransactionHistory();
}

async function calculateBenefit() {
    const accountNumber = await rl.question("Enter account number: ");
    const account = findAccount(accountNumber);
    console.log(
        `Yearly benefit for account ${account.accountNumber} (${account.ownerName}): $${account.calculateYearlyBenefit()}`,
    );
}

main();
