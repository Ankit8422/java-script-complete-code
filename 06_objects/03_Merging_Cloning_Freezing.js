// Cloning

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

}

const person1 = new Object({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
});


let profile2 = {
    ...profile
}

// console.log(profile2);

// console.log(profile1);

// spread Operator -> ...

// Merging
const profile1 = Object.assign({}, profile)


const merge = {
    ...profile,
    ...person1
}

console.log(merge);

const obj1 = { a: 1, b: 2,};
const obj2 = { b: 3, c: 4,};
const mergedObject = Object.assign({},obj1, obj2);
console.log(mergedObject)

// Freezing

// Object.freeze() makes an Object immutable, preventing the addition deletion or modification of its properties. Object.freeze()

const myObject = { a: 1, b: 2,};
Object.freeze(myObject);

myObject.c =3;
console.log(myObject);

