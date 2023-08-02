// src/atm_modules/login.ts
import inquirer6 from "inquirer";

// src/atm_modules/users.ts
var users = [
  {
    accountNumber: 1,
    name: "John Doe",
    password: "123",
    balancce: Math.floor(Math.random() * 1e4 + 1)
  },
  {
    accountNumber: 2,
    name: "Shad Chad",
    password: "456",
    balancce: Math.floor(Math.random() * 1e4 + 1)
  },
  {
    accountNumber: 3,
    name: "trump",
    password: "789",
    balancce: Math.floor(Math.random() * 1e4 + 1)
  }
];
var users_default = users;

// src/atm_modules/mainScreen.ts
import inquirer5 from "inquirer";

// src/atm_modules/cashWithdraw.ts
import inquirer from "inquirer";
async function otherAmount(balancce) {
  const askUser = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "enter amount to withdraw cash"
    }
  ]);
  if (askUser.amount < balancce) {
    balancce -= askUser.amount;
  } else {
    console.log("insufficient balance");
  }
  return balancce;
}
async function cashWithdraw(balancce) {
  var getCash = await inquirer.prompt([
    {
      type: "list",
      name: "withdraw",
      message: `Enter the amount you want to withdraw`,
      choices: ["500", "1000", "5000", "10000", "otherAmount"]
    }
  ]);
  switch (getCash.withdraw) {
    case 500:
      if (Number(getCash.withdraw) < balancce) {
        balancce -= getCash.withdraw;
      } else {
        console.log("insufficient balance");
      }
      break;
    case 1e3:
      if (Number(getCash.withdraw) < balancce) {
        balancce -= getCash.withdraw;
      } else {
        console.log("insufficient balance");
      }
      break;
    case 5e3:
      if (Number(getCash.withdraw) < balancce) {
        balancce -= getCash.withdraw;
      } else {
        console.log("insufficient balance");
      }
      break;
    case 1e4:
      if (Number(getCash.withdraw) < balancce) {
        balancce -= getCash.withdraw;
      } else {
        console.log("insufficient balance");
      }
      break;
    case "otherAmount":
      balancce = await otherAmount(balancce);
      break;
  }
  console.log(`Your new balance is ${balancce}`);
  return balancce;
}
var cashWithdraw_default = cashWithdraw;

// src/atm_modules/cashTransfer.ts
import inquirer2 from "inquirer";
async function transferAmount(balancce) {
  const amount = await inquirer2.prompt([
    {
      type: "number",
      name: "transfer",
      message: "enter account Number"
    },
    {
      type: "number",
      name: "tranferAmount",
      message: "enter amount: "
    }
  ]);
  balancce -= amount.tranferAmount;
  return balancce;
}
var cashTransfer_default = transferAmount;

// src/atm_modules/cashDeposit.ts
import inquirer3 from "inquirer";
async function deposit(balancce) {
  const cash = await inquirer3.prompt([
    {
      name: "deposit",
      type: "number",
      message: "Enter the amount you want to Deposit:"
    }
  ]);
  balancce += cash.deposit;
  return balancce;
}
var cashDeposit_default = deposit;

// src/atm_modules/utilityBills.ts
import inquirer4 from "inquirer";
var electricityBill = Math.floor(Math.random() * 1e5 + 1);
var gasBill = Math.floor(Math.random() * 1e3 + 1);
var waterBill = Math.floor(Math.random() * 1e3 + 1);
async function payBill(balancce) {
  const bill = await inquirer4.prompt([
    {
      type: "list",
      name: "pay",
      choices: ["electricityBill", "gasBill", "waterBill"],
      message: "Select Bill type:"
    }
  ]);
  if (bill.pay === "electricityBill") {
    balancce -= electricityBill;
  } else if (bill.pay === "gasBill") {
    balancce -= gasBill;
  } else if (bill.pay === "waterBill") {
    balancce -= waterBill;
  }
  return balancce;
}
var utilityBills_default = payBill;

// src/atm_modules/mainScreen.ts
async function reTransaction() {
  const askAgain = await inquirer5.prompt([
    {
      name: "retransact",
      type: "list",
      message: `Do You Want To Re-transaction?`,
      choices: ["Yes", "No"]
    }
  ]);
  return askAgain.reTransact;
}
async function mainScreen(balancce) {
  do {
    const mainoption = await inquirer5.prompt([
      {
        name: "operation",
        type: "list",
        message: "Which action you want to perform?",
        choices: [
          "Balance",
          "Cash Withdraw",
          "Cash Transfer",
          "Cash Deposit",
          "Utility Bills",
          "Exit"
        ]
      }
    ]);
    switch (mainoption.operation) {
      case "Balance":
        console.log(`Your current balance ${balancce}`);
        break;
      case "Cash Withdraw":
        await cashWithdraw_default(balancce);
        console.log(
          `Your transaction is successful new balance is ${balancce}`
        );
        break;
      case "Cash Transfer":
        await cashTransfer_default(balancce);
        console.log(
          `Your transaction is successful new balance is ${balancce}`
        );
        break;
      case "Cash Deposit":
        await cashDeposit_default(balancce);
        console.log(
          `Your transaction is successful new balance is ${balancce}`
        );
        break;
      case "Utility Bills":
        await utilityBills_default(balancce);
        console.log(
          `Your bill is paid successfully new balance is ${balancce}`
        );
        break;
      case "Exit":
        restart = "No";
        console.log(`Thanks For using Our services!`);
        break;
    }
    if (mainoption.operation !== "Exit") {
      var restart = await reTransaction();
    }
  } while (restart != "No");
}
var mainScreen_default = mainScreen;

// src/atm_modules/login.ts
async function login() {
  const existingUser = await inquirer6.prompt([
    {
      name: "accountNum",
      message: "Enter your accountNumber",
      type: "number"
    },
    {
      name: "password",
      message: "Enter your Password",
      type: "password"
    }
  ]);
  const findUser = users_default.find(
    (x) => x.accountNumber === existingUser.accountNum && x.password === existingUser.password
  );
  if (typeof findUser !== void 0) {
    console.log(`Welcome ${findUser?.name}`);
    findUser ? mainScreen_default(findUser?.balancce) : console.log("incorrect account number or password");
  } else {
    console.log("incorrect account number or password");
  }
}
var login_default = login;

// src/index.ts
login_default();
