let lists = document.querySelectorAll("ul");

for (let i = 0; i < lists.length; i++)
{
    if (i % 2 === 0) //i is even
    {
        lists[i].classList.add("bold");
        lists[i].classList.add("dark");
    }
    else //i is odd
    {
        lists[i].className = "bold light";
    }
}

/*
let listClassName = "";
if (confirm("Do you like darker colors?"))
{
    listClassName = "dark";
}
else
{
    listClassName = "light";
}

for (let i = 0; i < lists.length; i++)
{
    lists[i].className = listClassName;
}*/

/*if (confirm("Do you like darker colors?"))
{
    list.style.backgroundColor = "lightgray";
    list.style.border = "1px solid black";
    list.style.padding = "10px";
    list.style.color = "darkblue";
    list.style.listStyleType = "none";
}
else
{
    list.style.backgroundColor = "lightyellow";
    list.style.border = "1px solid black";
    list.style.padding = "10px";
    list.style.color = "orange";
    list.style.listStyleType = "none";
}*/
