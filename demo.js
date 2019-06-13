const Linq = require('./index');

let res = new Linq().range(1, 20, 1).first();
console.log(res);

let res1 = new Linq().range(1, 20, 1).all();
console.log(res1);

let res2 = new Linq()
    .range(0, 100, 1)
    .select(current => {
        return -current;
    })
    .where(current => {
        return current < -20;
    }).first();
console.log(res2);

let res3 = new Linq()
    .from([19, 20, 21])
    .where(current => {
        return current < 20;
    }).first();
console.log(res3);