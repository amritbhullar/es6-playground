// SPREAD OPERATOR
const params = ['monday', true, 25];
const other = [1, 2, ...params];

function f(x, y, ...args) {
  return (x + y) * args.length;
}
console.log(f(1, 2, ...params) === 9) // true

const str = "hello";
const list = [ ...str ]; // ['h', 'e', 'l', 'l', 'o']
console.log(list)
