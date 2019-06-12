const $ = require('underscore');

class Range extends Handler {
    constructor(...args) {
        this.args = args;
    }

    handleFunc(ctx) {
        ctx.iterator.add(start + ctx.iterator.cursor * step);
    }
}

module.exports = Range;