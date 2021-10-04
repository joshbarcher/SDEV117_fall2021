//get our HTML elements
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");

console.log(op1);
console.log(op2);
console.log(typeof op1);
console.log(typeof op2);

//gather the values in the input textboxes
let value1 = op1.value;
let value2 = op2.value;

console.log(typeof value1);
console.log(typeof value2);

//convert our string to a Number
value1 = parseInt(value1);
value2 = parseInt(value2);

//double check that my variable types have changed...
console.log(typeof value1);
console.log(typeof value2);

//add them together
let result = value1 + value2;

//display the result of the addition for the user
let spanResult = document.getElementById("result");
spanResult.innerHTML = result;
