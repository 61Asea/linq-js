const Handler = require('./query/cor/handler');
const LinqCollection = require('./base/LinqCollection');
const Range = require('./query/Range');
const Select = require('./query/Select');
const Where = require('./query/Where');

/**
 * Linq: Client
 * 功能: 
 * 1. 规定聚类生成(constructor/range)
 * 2. query职责链注册(.Range, .Select, .Where)
 * 3. 终结函数-通过职责链迭代聚类
 */

class Linq {
    constructor() {
        this.handler = new Handler();
    }

    first() {
        if (!this.linqCollection)
            throw new Error('请传入数据源');

        let iterator = this.linqCollection.createIterator();
        let slice = [];
        while (iterator.hasNext()) {
            this.handler.handle({
                iterator: iterator
            }).then(res => {
                console.log(res);
            });
            // if (res.break) {
            //     break;
            // }

            // console.log(res);
            // slice.push(res.iterator.current());

            iterator.next();
        }
        return slice;
    }

    from(collection) {
        this.linqCollection = new LinqCollection(collection);
        return this;
    }

    range(start, end, step) {
        this.linqCollection = new LinqCollection(
            Array.apply(null, {
                length: new Number((end - start) / step).toFixed()
            })
        );
        this.handler.setNext(
            new Range(start, end, step)
        );
        return this;
    }

    select() {

    }

    where() {

    }
}

module.exports = Linq;