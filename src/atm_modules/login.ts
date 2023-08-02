import inquirer from "inquirer";
import users from "./users.js";
import mainScreen from "./mainScreen.js";
async function login() {
  const existingUser = await inquirer.prompt([
    {
      name: "accountNum",
      message: "Enter your accountNumber",
      type: "number",
    },
    {
      name: "password",
      message: "Enter your Password",
      type: "password",
    },
  ]);
  const findUser = users.find(
    (x) =>
      x.accountNumber === existingUser.accountNum &&
      x.password === existingUser.password
  );
  if (typeof findUser !== undefined) {
    console.log(`Welcome ${findUser?.name}`);
    findUser
      ? mainScreen(findUser?.balancce)
      : console.log("incorrect account number or password");
  } else {
    console.log("incorrect account number or password");
  }
}
export default login;
