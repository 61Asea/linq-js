const $ = require('underscore');

class Range extends Handler {
    constructor(...args) {
        this.args = args;
    }

    handleFunc(ctx) {
        if (ctx.break) {
            return;
        }
        
    }
}

module.exports = Range;