// const Linq = new (require('./Linq'))([1, 2, 3, 4, 5]);

// let res = Linq.select(() => {

// }).where(() => {

// }).first();

// console.log(res);

const Linq = require('./index');

let res = new Linq().range(1, 20, 1).first();
// console.log(res);