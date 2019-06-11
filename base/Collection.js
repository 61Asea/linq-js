const LinqIterator = require('./LinqIterator');

/**
 * Collection: 聚类集合
 * 功能:
 * 1. 初始化迭代器
 * 2. 无初始值由用户初始化迭代器
 */
class Collection {
    constructor(collection) {
        if (collection.length) {
            this.iterator = this.createIterator(collection);
        }
    }

    createIterator(collection) {
        return new LinqIterator(collection);
    }
}

module.exports = Collection;