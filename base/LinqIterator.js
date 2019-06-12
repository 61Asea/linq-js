class LinqIterator {
    constructor(collection) {
        this.collection = collection;
        this.cursor = 0;
    }
    
    add(arg) {
        this.collection[this.cursor] = arg;
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
        this.cursor += 1;
        return this.collection[this.cursor];
    }
}

module.exports = LinqIterator;