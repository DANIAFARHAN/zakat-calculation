import inquirer from "inquirer";

let zakat: number = 2.5;
let goldValueInTola = 234800;
let goldWeightInTolaReq = 7.5;
let condition = true; 
const answer = await inquirer.prompt([
    {
        name: "goldWeight",
        massage: "EntergoldWeight",
        type: "number",
    }
]);

let goldWeight = answer.goldWeight;

if (goldWeight >= goldWeightInTolaReq){
    let calculatedzakat = (goldWeight * goldValueInTola) * (zakat/100);
    console.log(`The calculated value of gold weighing 
    ${goldWeight} tola ${calculatedzakat}`);
} else {
    console.log("zakat not applicable");

}
condition = false;