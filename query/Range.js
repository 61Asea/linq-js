const Handler = require('./cor/handler');

class Range extends Handler {
    constructor(...args) {
        super();
        this.args = args;
    }

    handleFunc(ctx) {
        ctx.iterator.collection[ctx.iterator.cursor] = this.args[0] + ctx.iterator.cursor * this.args[2];
    }
}

module.exports = Range;