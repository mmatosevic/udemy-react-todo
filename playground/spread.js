var person = ["Mike", 90];
var otherPerson = ["John", 23];

function personGreet(name, age) {
    console.log("Hi " + name + ", you are " + age);
}

personGreet(...person);
personGreet(...otherPerson);

var names = ["Johann", "Derp"];
var final = ["Prophet", ...names];

final.forEach((name) => {
    console.log("Hi " + name);
});