window.onload = function() {
    let textBox = document.getElementById("phone");
    textBox.onkeypress = enteredKey;
};

function enteredKey(event)
{
    //stop the default behavior (entering the pressed key in the textbox)
    event.preventDefault();

    //valid keys to press
    let numbers = "1234567890";
    let textbox = document.getElementById("phone");
    let errorLabel = document.getElementById("error");

    //verify that key pressed is inside of the string "numbers"
    if (numbers.includes(event.key))
    {
        //insert the key they pressed into the textbox
        textbox.value = textbox.value + event.key;
        errorLabel.textContent = "";
    }
    else
    {
        //show an error message
        errorLabel.textContent = "Please enter a number 0-9";
    }
}

