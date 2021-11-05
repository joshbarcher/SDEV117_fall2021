//create an object that represents our class
let ourClass = {
    title: "Web Programming with JavaScript",
    studentsInClass: 12,
    quarter: "Fall 2021",
    inPerson: false,
    isRecorded: true,
    students: ["Aaron", "Cherie", "Daniel", "Duc", "Gurnek"]
};

console.log(ourClass);

//use our attributes in loops
for (let i = 0; i < ourClass.students.length; i++)
{
    console.log(ourClass.students[i]);
}

//use our attributes for control flow
if (ourClass.isRecorded)
{
    console.log("That is great!");

    if (ourClass.inPerson)
    {
        //...
    }
}
else
{
    console.log("Boo!");
}