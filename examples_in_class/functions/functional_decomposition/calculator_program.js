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

function runProgram()
{
    //welcome the user and then prompt them for inputs
    welcome();
    getUserInputs();
    showResults();
}

//functions to run the console program
function welcome()
{
    console.log("Welcome to my Arithmetic Calculator");
    console.log("***********************************");
    console.log();
    console.log("Author: Josh Archer");
    console.log("***********************************");
    console.log();
}

function getUserInputs()
{
    num1 = parseInt(prompt("Enter a number"));
    num2 = parseInt(prompt("Enter a number"));
    operator = prompt("Enter a type of arithmetic (+ add, - sub, * mult, / div)");
}

function showResults()
{
    switch (operator)
    {
        case "+":
            console.log(num1 + " + " + num2 + " = " + add(num1, num2));
            break;
        case "-":
            console.log(num1 + " - " + num2 + " = " + sub(num1, num2));
            break;
        case "*":
            console.log(num1 + " * " + num2 + " = " + mult(num1, num2));
            break;
        case "/":
            console.log(num1 + " / " + num2 + " = " + div(num1, num2));
            break;
    }
}

//arithmetic functions
function add(oper1, oper2)
{
    return oper1 + oper2;
}

function sub(oper1, oper2)
{
    return oper1 - oper2;
}

function mult(oper1, oper2)
{
    return oper1 * oper2;
}

function div(oper1, oper2)
{
    if (oper2 === 0)
    {
        return undefined;
    }

    return oper1 / oper2;
}