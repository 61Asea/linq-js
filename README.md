**Example : FILTER AFTER SELECT & RANGE**

```javascript
let res2 = new Linq()
    .range(0, 100, 1)
    .select(current => {
        return -current;
    })
    .where(current => {
        return current < -20;
    }).first();
console.log(res2);
```