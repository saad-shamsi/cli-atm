import inquirer from "inquirer";
import users from "./users.js";
import login from "./login.js";
import cashWithdraw from "./cashWithdraw.js";
import cashTransfer from "./cashTransfer.js";
import cashDeposit from "./cashDeposit.js";
import utilityBills from "./utilityBills.js";

async function reTransaction() {
  const askAgain = await inquirer.prompt([
    {
      name: "retransact",
      type: "list",
      message: `Do You Want To Re-transaction?`,
      choices: ["Yes", "No"],
    },
  ]);

  return askAgain.reTransact;
}
async function mainScreen(balancce: number) {
  do {
    const mainoption = await inquirer.prompt([
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
          "Exit",
        ],
      },
    ]);
    switch (mainoption.operation) {
      case "Balance":
        console.log(`Your current balance ${balancce}`);
        break;
      case "Cash Withdraw":
        await cashWithdraw(balancce);
        console.log(
          `Your transaction is successful new balance is ${balancce}`
        );
        break;
      case "Cash Transfer":
        await cashTransfer(balancce);
        console.log(
          `Your transaction is successful new balance is ${balancce}`
        );
        break;
      case "Cash Deposit":
        await cashDeposit(balancce);
        console.log(
          `Your transaction is successful new balance is ${balancce}`
        );
        break;
      case "Utility Bills":
        await utilityBills(balancce);
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
export default mainScreen;

type AskAgain = {
  name: string;
  type: string;
  message: string;
  choices: string[];
};
