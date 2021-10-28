let input = "";
while (input !== "stop")
{
    //ask the user for a number
    input = prompt("Enter a number");

    if (input !== "stop")
    {
        input = parseInt(input);

        //check if it is valid
        if (Number.isNaN(input))
        {
            alert("Not a number, enter more carefully!");
        }
        else
        {
            alert("Your number was " + input);
        }
    }
}