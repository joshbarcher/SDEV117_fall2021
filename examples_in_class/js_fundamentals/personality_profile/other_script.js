//read in the user inputs
let breakfast = prompt("What did you eat for breakfast?");
let exercise = confirm("Did you exercise? (ok = yes, cancel = no)");

//make sure that the comparisons below are case-insensitive
breakfast = breakfast.toLowerCase();

console.log(breakfast);
console.log(exercise);

//first check if they exercised
if (exercise) {
    //did exercise
    switch (breakfast) {
        case "egg":
            console.log("You're studious");
            break;
        case "cereal":
            console.log("You are wise");
            break;
        case "toast":
            console.log("You are silly");
            break;
        default:
            console.log("I'm not sure how to predict your personality");
            break;
    }
} else {
    //didn't exercise
    switch (breakfast) {
        case "eggs":
            console.log("You're pragmatic");
            break;
        case "cereal":
            console.log("You are unwieldy");
            break;
        case "toast":
            console.log("You are crazy");
            break;
        default:
            console.log("I'm not sure how to predict your personality");
            break;
    }
}