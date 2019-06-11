const Collection = require('./base/Collection');
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
                item: this.iterator.current()
            });
            if (res) {
                return res;
            }

            this.iterator.next();
        }
    }

    range(...args) {
        this.handler.setNext(
            new Range(args)
        );
    }

    select() {
        this.handler.setNext(
            new Select()
        );
    }

    where() {
        this.handler.setNext(
            new Where()
        );
    }
}

module.exports = Linq;