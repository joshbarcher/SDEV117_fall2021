/*
    This file (module) contains all functions that deal
    with user input through popup boxes or output on
    the console

    Filename: input_output.js
    Author: Josh Archer
    Date: 11/1/2021
 */

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