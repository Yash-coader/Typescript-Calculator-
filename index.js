import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your'e First Number", type: "number", name: "FirstNumber" },
    {
        message: "Enter your'e First Number",
        type: "number",
        name: "SecoundtNumber",
    },
    {
        message: "Please select one of the opreators to perfom action",
        type: "list",
        name: "opraetor",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);
// answer Statement
if (answer.opraetor === "Addition") {
    console.log(answer.FirstNumber + answer.SecoundtNumber);
}
else if (answer.opraetor === "subtraction") {
    console.log(answer.FirstNumber - answer.SecoundtNumber);
}
else if (answer.opraetor === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecoundtNumber);
}
else if (answer.opraetor === "Division") {
    console.log(answer.FirstNumber / answer.SecoundtNumber);
}
else {
    console.log("Please Chose A Valid Opreator");
}
