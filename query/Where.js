const Handler = require('./cor/handler');

class Where extends Handler {
    constructor(assert) {
        super();
        this.assert = assert;
    }

    handleFunc(ctx) {
        ctx.checked = this.assert(ctx.iterator.collection[ctx.iterator.cursor]) ? true : false;
    }
}

module.exports = Where;