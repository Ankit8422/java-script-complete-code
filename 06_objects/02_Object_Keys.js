let profile = {
    name: "Ankit",
    surname: "Dubey",
    age: 21,
    college: "PVGS",
    fullName: function(){
        return this.name + " " + this.surname;
    },
    address: {
        street: "123 main st",
        city: "Anytown",
        zipCode: "12345"
    },
};

// The Object.keys() method returns an array with the keys of an Object.

const keys = Object.keys(profile);
console.log(keys);

const values = Object.values(profile);
console.log(values);

const entries = Object.entries(profile);
console.log(entries);
