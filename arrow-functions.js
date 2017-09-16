// Shorter syntax for functions; Usable for single-purpose small functions.

const cookies = [
  { name: 'chocolate-chip', type: 'classic', price: 3, baker: 'amrit-bhullar' },
  { name: 'peanut-butter', type: 'new', price: 3.5, baker: 'amrit-bhullar' },
  { name: 'chocolate-brownie', type: 'new', price: 3, baker: 'new-baker' },
  { name: 'snickerdoodle', type: 'classic', price: 3.5, baker: 'amrit-bhullar' },
  { name: 'coffee-chip', type: 'new', price: 4 },
  { name: 'sugar', price: 3, baker: 'new-baker' }
];

// 'c' in arrow functions stands for 'cookie'
// 'c' chosen for simpler syntax
const costOfClassicCookiesByAmrit = cookies
  .filter(c => c.baker === 'amrit-bhullar')
  .filter(c => c.type === 'classic')
  .map(c => c.price)
  .reduce((prev, value) => (prev || 0) + value);

// Above arrow functions replace the below repetitive code
// const costOfClassicCookiesByAmrit = cookies
//   .filter(function(c) {
//     return c.baker === 'amrit-bhullar';
//   }).filter(function(c) {
//     return c.type === 'classic';
//   }).map(function(c) {
//     return c.price;
//   }).reduce(function(prev, value) {
//     return (prev || 0) + value;
//   });

console.log('Total price of classic cookies by Amrit:', costOfClassicCookiesByAmrit);
