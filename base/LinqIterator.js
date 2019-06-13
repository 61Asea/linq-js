class LinqIterator {
    constructor(collection) {
        this.collection = collection;
        this.cursor = 0;
    }
    
    current() {
        return this.collection[this.cursor];
    }

    first() {
        return this.collection[0];
    }

    hasNext() {
        return this.cursor < this.collection.length;
    }

    next() {
        let current = this.current();
        this.cursor += 1;
        return current;
    }
}

module.exports = LinqIterator;