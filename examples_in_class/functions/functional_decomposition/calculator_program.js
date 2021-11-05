/*
    The program will do the following:

    - Welcome the user to the program
    - Ask the user for a few numbers
    - Ask the user for a type of arithmetic (mult, add, divide, sub)
    - Perform some arithmetic
    - Show the result
 */

//define global variables to hold our calculator values
//(global variables are accessible inside and outside
// of functions)
let num1 = 0;
let num2 = 0;
let operator = "";

//start the program
runProgram();
console.log("Thanks for using my program!");

function runProgram()
{
    //welcome the user and then prompt them for inputs
    welcome();
    getUserInputs();
    showResults();
}
