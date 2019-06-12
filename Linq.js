const Collection = require('./base/Collection');
const First = require('./result/first');
const Handler = require('./query/cor/handler');
const Range = require('./query/Range');
const Select = require('./query/Select');
const Where = require('./query/Where');

/**
 * Linq: Client
 * 功能: 
 * 1. 规定聚类生成(constructor/range)
 * 2. query职责链注册(.Select, .Where)
 * 3. 终结函数-调用
 */

class Linq extends Collection {
    constructor(collection) {
        super(collection);
        this.handler = new Handler();
    }

    first() {
        while (this.iterator.hasNext()) {
            let res = this.handler.handle({
                iterator: this.iterator
            });
            if (!res.break) {
                return res.iterator.current();
            }

            this.iterator.next();
        }
    }

    range(start, end, step) {
        this.createIterator([]);
        this.handler.setNext(
            new Range(start, end, step)
        );
        return this;
    }

    select(assert) {
        this.handler.setNext(
            new Select(assert)
        );
        return this;
    }

    where(assert) {
        this.handler.setNext(
            new Where(assert)
        );
        return this;
    }
}

module.exports = Linq;