// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let num of numbers) {
//     console.log(num)
// }

 cost person = {
    name: 'Gabe',
    age: 25,
    city: 'New York'
};
 
for(const key in person) {
    console.log('key =', key);
    console.log('value =', person[key]);
}