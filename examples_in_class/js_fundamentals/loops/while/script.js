//ask the user to enter a number, then print the square of the number
//1^2 = 1, 2^2 = 4, 3^3 = 9, ...
//The program will stop if the user enters a negative number

/*let numEntered = 0;
while (numEntered >= 0)
{
    //ask the user for a number
    numEntered = prompt("Enter a number (negative will exit)");
    numEntered = parseInt(numEntered);

    if (numEntered < 0)
    {
        //break; //exit the loop
        continue; //go back to the top of the loop
    }

    //print the square of the number
    if (Number.isNaN(numEntered)) //bad value
    {
        alert("Please enter a valid number!");
    }
    else //good value
    {
        let square = numEntered * numEntered;
        alert(numEntered + " squared is " + square);
    }
}*/

//print 9! to the console
/*let num = 1;
let total = 1; //why is this bad?!?!

while (num <= 9) //this needs to be false
{
    console.log(total);
    total = total * num;
    num++; //move to the next higher number
}
console.log("9! = " + total);*/

let total = 1;
for (let num = 1; num <= 9; num++)
{
    console.log(total);
    total = total * num;
}
console.log("9! = " + total);









