const string = "hello";
const aNumber = 42;
const aBoolean = true;
const aNull = null;
let anUnderfind;
let anObject = { label: "sample"};
const anArray = [1, 2, 3];
function aFunction () {
    return "hi"
};

console.log(
  typeof(aString),
  typeof(aNumber),
  typeof(aBoolean),
  typeof(aNull),
  typeof(anArray),
  typeof(aFunction())
);

console.log(Array.isArray())
console.log("typeof null is string object histori quirk")