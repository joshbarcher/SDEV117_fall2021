//select my elements
let textbox = document.getElementById("entry");
let button = document.querySelector("button");
let textarea = document.querySelector("textarea");

let count = 0;

//add event handlers to the elements
button.onclick = function(event) {
    count++;

    let message = "You clicked the button " + count + " times!\n";
    console.log(message);
    textarea.textContent += message;
};

button.onmouseenter = function(event) {
    console.log("Mouse entered button");
    button.style.backgroundColor = "orange";
    button.style.border = "1px solid gray";
    button.style.borderRadius = "3px";
};

button.onmouseleave = function(event) {
    console.log("Mouse left the button");
    button.style.backgroundColor = "";
    button.style.border = "";
    button.style.borderRadius = "";
};

textbox.onkeypress = function(event) {
    console.log("You pressed a key: ?");
};

//assign a few events to the same handler, by name
textarea.onclick = clickHandler;
textbox.onclick = clickHandler;

function clickHandler(event)
{
    let clickedOn = event.target;
    console.log("You clicked something: " + clickedOn.tagName);
}







