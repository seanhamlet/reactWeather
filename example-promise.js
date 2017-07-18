// // callback
// function getTempCallback(location, callback) {
//   // success case
//   callback(undefined, 78);
//   // error case
//   callback('City not found');
// }

// getTempCallback('Lexington', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// // promise
// function getTempPromise(location) {
//   // return a new Promise
//   // Promise constructor takes a function with a "resolve" and "reject" argument
//   return new Promise(function (resolve, reject) {
//     // fake delay with setTimeout (1 second delay (1000 ms))
//     setTimeout(function () {
//       // if things went well, you call resolve
//       resolve(79);
//       // if things went bad, you can reject
//       reject('City not found');
//     }, 1000);

//   });
// }

// // wait for data to come back using the 'then' method available on Promises
// // 'then' method only available because we returned a Promise
// // 'then' lets us specify an error and success callback (two separate functions)
// //    that will only get executed (at most) one time
// getTempPromise('Lexington').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise error', err);
// })

// Challenge Area
// if a and b both numbers, then resolve to add them together
// if a or b isn't provided or aren't numbers, then reject with error message
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a or b not number');
    }
  });
}

// test cases
// 1. two numbers
addPromise(2, 3).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});

// 2. one number and string
addPromise(2, 'cat').then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});
