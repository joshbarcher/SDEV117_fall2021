/*
    The program will do the following:

    - Welcome the user to the program
    - Ask the user for a few numbers
    - Ask the user for a type of arithmetic (mult, add, divide, sub)
    - Perform some arithmetic
    - Show the result
 */

//welcome the user and then prompt them for inputs
welcome();
getUserInputs();

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
    let num1 = parseInt(prompt("Enter a number"));
    let num2 = parseInt(prompt("Enter a number"));
    let operator = prompt("Enter a type of arithmetic (+ add, - sub, * mult, / div)");

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