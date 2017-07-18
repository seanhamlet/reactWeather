var names = ['Sean', 'Regina', 'Greg'];

// // anonymous function
// names.forEach(function (name) {
//   console.log('forEach', name);
// });

// // arrow function with curly braces (statements can have multiple lines)
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// // arrow function without curly braces (one line statement) (expression syntax)
// names.forEach((name) => console.log(name));

// arrow functions with simple defined expressions always get returned
// in this case, name + '!' gets returned
// var returnMe = (name) => name + '!';
// console.log(returnMe('Sean'));

// anonymous functions have a 'this' binding,
// while arrow functions take on their parent's 'this' binding

// var person = {
//   name: 'Sean',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// };

// person.greet();

// Challenge Area

function add (a, b) {
  return a + b;
}
console.log(add(1, 3));

// addStatement
var addStatement = (a, b) => {
  return a + b;
};
console.log(addStatement(4, 7));

// addExpression
// no need to return a + b, because whatever expression is here gets automatically returned
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));