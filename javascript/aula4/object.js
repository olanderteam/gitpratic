const person = {
    name: "Gabe",
    city: "Fortaleza",
    age: 28
};

console.log(person);

console.log(person.name);

console.log(person.age);

console.log(person.city); 

console.log(person["age"]);

console.country = "Brazil"
console.log(person);

person.age = 30;
console.log(person);

delete person.city 
console.log(person);


for (const key in person) {
    console.log("key =" key);
    console.log("value =" , person[key]) 
}
