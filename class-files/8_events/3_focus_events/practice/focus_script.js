//wait for the page to load
window.onload = pageLoad;

function pageLoad()
{
    //this code will load after all elements have loaded
    let fields = document.querySelectorAll("input, select");

    for (let i = 0; i < fields.length; i++)
    {
        let field = fields[i];
        field.onfocus = focusHandler;
        field.onblur = blurHandler;
    }
}

function focusHandler(event)
{
    let field = event.target; //target is the element that the event fired upon
    field.style.backgroundColor = "lightgreen";
}

function blurHandler(event)
{
    let field = event.target;
    field.style.backgroundColor = "";
}

