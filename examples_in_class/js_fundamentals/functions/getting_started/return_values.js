//call the function and store the results
let isItOdd = isOdd(13);
console.log("Is it odd? " + isItOdd);

isItOdd = isOdd(44);
console.log("Is it odd? " + isItOdd);

//another way to do the same thing
console.log("Is it odd? " + isOdd(13));
console.log("Is it odd? " + isOdd(44));

//this function has a problem, make sure that
//every "path" through a function leads to a
//return value (if the function is producing one)
function isOdd(num)
{
    if (num % 2 == 1)
    {
        return true;
    }
}
