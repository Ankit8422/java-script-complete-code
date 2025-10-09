// anonymous function

let profile = {
    name: "Ankit",
    surname: "Dubey",
    age: 21,
    college: "PVGS",
    fullName: function(){
        return this.name + " " + this.surname;
    },
    address: {
        street: "1224 Main st",
        city: "Anytown",
        zipcode: "13243"
    },
}


console.log(profile.name,profile['name']);

console.log(profile.fullName());
console.log(profile.address.city);

// Objects Creation

let person = new Object();
person.fName = "Ankit";
person.lName = "Dubey";
person.age = 20;
console.log(person);

const person1 = new Object({
    fisrtName: "john",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
});

console.log(person1)
