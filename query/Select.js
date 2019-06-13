const Handler = require('./cor/handler');

class Select extends Handler{
    constructor(assert) {
        super();
        this.assert = assert;
    }

    handleFunc(ctx) {
        ctx.iterator.collection[ctx.iterator.cursor] = this.assert(ctx.iterator.collection[ctx.iterator.cursor]);
    }
}

module.exports = Select;