//send a message to the console to see if this script is working
console.log("Name script working");

//select the four list items on the page
let firstName = document.querySelector("span#first");
let lastName = document.querySelector("span#last");
let middleInit = document.querySelector("span#middle");
let nickName = document.querySelector("span#nickname");

//enter our name data into the list items
firstName.innerHTML = "Josh";
lastName.innerHTML = "Archer";
middleInit.innerHTML = "B";
nickName.innerHTML = "Teach";

//we can set styles through the style property
firstName.style.fontWeight = "bold";
firstName.style.backgroundColor = "beige";










