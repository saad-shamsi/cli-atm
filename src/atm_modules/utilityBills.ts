import inquirer from "inquirer";

let electricityBill = Math.floor(Math.random() * 100000 + 1);
let gasBill = Math.floor(Math.random() * 1000 + 1);
let waterBill = Math.floor(Math.random() * 1000 + 1);

async function payBill(balancce: number) {
  const bill = await inquirer.prompt([
    {
      type: "list",
      name: "pay",
      choices: ["electricityBill", "gasBill", "waterBill"],
      message: "Select Bill type:",
    },
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
export default payBill;
