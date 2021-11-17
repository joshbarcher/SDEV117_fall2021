//welcome to our program
alert("Welcome to our Arithmetic program");

//ask them to input some numbers
let numerator = prompt("Enter a numerator");
let denominator = prompt("Enter a denominator");

//convert string inputs to numbers
numerator = Number(numerator);
denominator = Number(denominator);

//show the results of arithmetic on those numbers
if (Number.isNaN(numerator) || Number.isNaN(denominator))
{
    alert("You entered something that is not a number!!");
}
else if (denominator === 0)
{
    alert("You cannot divide by zero!!");
}
else
{
    //perform the calculation and show it
    let result = numerator / denominator;
    alert(numerator + " / " + denominator + " = " + result);
}