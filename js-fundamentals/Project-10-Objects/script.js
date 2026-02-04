
const person = {
 name: "Luis",
 age: 24,
 isStudent: true,
};

console.log(person.name);
console.log(person.age);

console.log(person["isStudent"]);

person.city = "Miami";
console.log(person);

person.age = 25;
console.log(person);

delete person.isStudent;
console.log(person);

for (let key in person)
console.log("key", key);


for (let key in person) {
    console.log(key, person[key]);
}

console.log(Object.keys(person)); 
console.log(Object.values(person));

console.log(Object.entries(person));

const food = {
    fruit: 'banana',
    snack: 'chocolate',
    main: {
        vegan: 'salad',
        popular: 'steak'
    }
}

console.log(food.main.vegan);
