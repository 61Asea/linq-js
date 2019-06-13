const LinqIterator = require('./LinqIterator');

/**
 * Collection: Linq聚类集合
 * 功能:
 * 1. 初始化迭代器
 * 2. 增加/删除集合项
 * 3. 无初始值由用户初始化迭代器
 */

class LinqCollection {
    constructor(collection) {
        if (!Array.isArray(collection))
            throw new Error(`${collection}不是数组`);

        this.collection = collection;
    }

    add(arg) {
        collection.push(arg);
    }

    createIterator() {
        return new LinqIterator(this.collection);
    }

    remove(index) {
        collection.splice(index, 1);
    }
}

module.exports = LinqCollection;