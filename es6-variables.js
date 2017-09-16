// var: function scope
// let: introduces block scope

var i = 6789;
function letsLoop(arr) {
  for (let i=0; i < arr.length; i++) {
    console.log(i);
  }
}
if (true) {
  let i = 1234;
  console.log('inside if statement:', i); // 1234
}

letsLoop(['a', 'b', 'c', 'd']); // 0, 1, 2, 3
console.log(i); // 6789


// const: assignment that you cannot reassign
// (compared to let here)

let x = 'cat';
x = 'dog';
console.log(x) // dog
const greeting = 'Hello World';
//greeting = 'Thank you' - cannot do this since immutable const
