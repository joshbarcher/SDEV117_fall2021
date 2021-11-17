//create an object that represents our class
let ourClass = {
    title: "Web Programming with JavaScript",
    studentsInClass: 12,
    quarter: "Fall 2021",
    inPerson: false,
    isRecorded: true,
    students: ["Aaron", "Cherie", "Daniel", "Duc", "Gurnek", "Jeromey"],
    teacher: {
        title: "Mr",
        name: "Josh Archer",
        degree: "Masters in Comp. Sci.",
        almaMater: "UW",
        teaches: [
            {
                id: "SDEV 106",
                title: "Front End Web Development"
            },
            {
                id: "SDEV 117",
                title: "Web Dev. W/ Javascript"
            }
        ]
    },

    generalHello: printHello,
    hello: function() {
        console.log("Welcome to class! Glad to have you here!")
    },
    rollCall: function() {
        //when accessing a property of this object, you have to
        //use the keyword "this", for example this.title, this.quarter, this.inPerson, ...
        return this.students.length;
    },
    printMe: function() {
        console.log("Title: " + this.title);
    },
    announce: function(message) {
        console.log("Announcement: " + message);
    }
};

//print the teacher's name
console.log(ourClass.teacher.name);
console.log(ourClass.teacher.teaches[0].title);

function printHello()
{
    console.log("Hello class!");
}

console.log(ourClass.title);
console.log(ourClass);
ourClass.hello();
ourClass.generalHello();

//call the announce() method
ourClass.announce("Quiet down everyone!");
ourClass.announce("Don't forget the quiz this afternoon!");

//rollCall() returns a value, we need to save it
let studentCount = ourClass.rollCall();
console.log(studentCount + " students are in class today!");

ourClass.printMe();

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

//objects are not classes (for you Java folks)
let point1 = {
    x: 3,
    y: 10
}

let point2 = {
    x: 4,
    y: 0,
    z: 101
}





















