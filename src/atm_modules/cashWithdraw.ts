import inquirer from "inquirer";

async function otherAmount(balancce: number) {
  const askUser = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "enter amount to withdraw cash",
    },
  ]);
  if (askUser.amount < balancce) {
    balancce -= askUser.amount;
  } else {
    console.log("insufficient balance");
  }
  return balancce;
}

async function cashWithdraw(balancce: number) {
  var getCash = await inquirer.prompt([
    {
      type: "list",
      name: "withdraw",
      message: `Enter the amount you want to withdraw`,
      choices: ["500", "1000", "5000", "10000", "otherAmount"],
    },
  ]);

  switch (getCash.withdraw) {
    case 500:
      if (Number(getCash.withdraw) < balancce) {
        balancce -= getCash.withdraw;
      } else {
        console.log("insufficient balance");
      }
      break;
    case 1000:
      if (Number(getCash.withdraw) < balancce) {
        balancce -= getCash.withdraw;
      } else {
        console.log("insufficient balance");
      }
      break;
    case 5000:
      if (Number(getCash.withdraw) < balancce) {
        balancce -= getCash.withdraw;
      } else {
        console.log("insufficient balance");
      }
      break;
    case 10000:
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

export default cashWithdraw;

// if (Number (getCash.withdraw) < balancce) {}
// else {
//   console.log("insufficient balance");
//   console.log(getCash.withdraw == "otherAmount");
//   console.log(getCash.withdraw < balancce);

// }
