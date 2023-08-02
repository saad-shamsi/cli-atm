import inquirer from "inquirer";
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
}
export default login;
//# sourceMappingURL=login.js.map