import inquirer from "inquirer";

async function deposit(balancce: number) {
  const cash = await inquirer.prompt([
    {
      name: "deposit",
      type: "number",
      message: "Enter the amount you want to Deposit:",
    },
  ]);
  balancce += cash.deposit;
  return balancce;
}

export default deposit;
