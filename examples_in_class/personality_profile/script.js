//read in the user inputs
let breakfast = prompt("What did you eat for breakfast?");
let exercise = confirm("Did you exercise? (ok = yes, cancel = no)");

console.log(breakfast);
console.log(exercise);

//guess their personality
//determine their personality
let personality;
if (breakfast === "fruit") //fruit is always the same output
{
    personality = "wise";
}
else if (breakfast === "cereal")
{
    if (exercised)
    {
        personality = "studious";
    }
    else
    {
        personality = "melodramatic";
    }
}
else if (breakfast === "pancakes")
{
    if (exercised)
    {
        personality = "studious";
    }
    else
    {
        personality = "melodramatic";
    }
}
else if (breakfast === "eggs")
{
    if (exercised)
    {
        personality = "studious";
    }
    else
    {
        personality = "melodramatic";
    }
}
else
{
    personality = "unknown";
}

if (breakfast === "fruit") //fruit is always the same output
{
    personality = "wise";
}
else if (exercised) //they exercised
{
    if (breakfast === "cereal")
    {
        personality = "studious";
    }
    else if (breakfast === "pancakes")
    {
        personality = "watchful";
    }
    else if (breakfast === "eggs")
    {
        personality = "silly";
    }
    else
    {
        personality = "unknown";
    }
}
else //they did not exercise
{
    if (breakfast === "cereal")
    {
        personality = "melodramatic";
    }
    else if (breakfast === "pancakes")
    {
        personality = "unwise";
    }
    else if (breakfast === "eggs")
    {
        personality = "brave";
    }
    else
    {
        personality = "unknown";
    }
}

if (breakfast === "fruit") //fruit is always the same output
{
    personality = "wise";
}
else if (breakfast === "cereal" && exercised)
{
    personality = "studious";
}
else if (breakfast === "pancakes" && exercised)
{
    personality = "watchful";
}
else if (breakfast === "eggs" && exercised)
{
    personality = "silly";
}
else if (breakfast === "cereal" && exercised === false)
{
    personality = "melodramatic";
}
else if (breakfast === "pancakes" && !exercised)
{
    personality = "unwise";
}
else if (breakfast === "eggs" && !exercised)
{
    personality = "brave";
}

//show them their profile
console.log("You are " + personality);