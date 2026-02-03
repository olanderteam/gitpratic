Objects in JavaScript — Beginner Guide
What is an object?
An object is a collection of key-value pairs.
Think of it as a labeled box:

Each label (key) describes what’s inside.
Each value is the thing stored under that label.
Example:

const car = {
  brand: "Toyota",
  year: 2020,
  isElectric: false,
};
Ways to work with objects
1 Dot notation (object.key)
Use when you know the exact key name.

console.log(car.brand); // "Toyota"
2 Bracket notation (object["key"])
Use when the key is stored in a variable or contains special characters.

console.log(car["year"]); // 2020
Modifying objects
Add new property:
car.color = "red";
Update property:
car.year = 2021;
Delete property:
delete car.isElectric;
Iterating objects
for...in loop:
for (let key in car) {
  console.log(key, car[key]);
}
Object.keys(): gives an array of all keys
Object.values(): gives an array of all values
Object.entries(): gives an array of [key, value] pairs
Nested objects
Objects can live inside other objects:

const user = {
  id: 1,
  profile: {
    name: "Ana",
    age: 25,
  },
};
console.log(user.profile.name); // "Ana"
Analogy: Think of a folder with subfolders inside.

When to use objects?
To represent a real-world thing (user, car, book).
To group related data together.
To make code easier to read and maintain.