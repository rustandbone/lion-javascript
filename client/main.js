import { xhr, xhrPromise, tiger } from './lib/index.js';

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

const data = await tiger.get('https://jsonplaceholder.typicode.com/users');
console.log(data);
