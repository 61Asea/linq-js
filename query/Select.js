class Select {
    constructor(assert) {
        this.assert = assert || function () {
            
        };
    }

    handleFunc(ctx) {
        this.assert(ctx.iterator.current());
    }
}