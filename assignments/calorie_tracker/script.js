//this registers the button click events when the
//page loads
window.onload = function() {
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;
}

//convert lbs to kgs from the input fields in the
//page and send output to the console
function lbsToKgs()
{
    output("Clicked the lbs to kgs button");
}

//determine MET value for exercises in the dropdown
//list and send output to the console
function workoutToMet()
{
    output("Clicked the MET calculation button");
}

//Calculates the calories burned per minute, given
//the inputs from the page and sends the output
//to the console
function calculateCalories()
{
    output("Clicked the calculate calories button");
}

//this function takes the provided message and prints
//it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}