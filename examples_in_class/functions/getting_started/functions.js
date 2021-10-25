//call (invoke) a function
for (let i = 1; i <= 50; i++)
{
    //if a function returns a value, you need to store
    //it in a variable, otherwise the value is lost
    let flip = coinFlip();
    console.log("You flipped " + flip);
}

//there is no output here, we never stored our return value!
coinFlip();
coinFlip();

//declare a function that flips a coin
function coinFlip()
{
    let random = Math.random();
    if (random <= 0.5)
    {
        return true; //heads!
    }
    else
    {
        return false; //tails!
    }
}

printRandomNumbers(10, 10);

//prints numbers from [0, max) the given number of times
function printRandomNumbers(max, quantity)
{
    for (let i = 1; i <= quantity; i++)
    {
        let generatedNumber = Math.random() * max;
        console.log(generatedNumber);
    }
}













