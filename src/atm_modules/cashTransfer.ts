import inquirer from "inquirer";
import users from "./users.js";

async function transferAmount(balancce: number) {
  const amount = await inquirer.prompt([
    {
      type: "number",
      name: "transfer",
      message: "enter account Number",
    },

    {
      type: "number",
      name: "tranferAmount",
      message: "enter amount: ",
    },
  ]);

  balancce -= amount.tranferAmount;
  return balancce;
}
export default transferAmount;
