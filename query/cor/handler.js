class Handler {
    setNext(next) {
        let temp = this;
        while(temp.next) {
            temp = temp.next;
        }
        temp.next = next;
    }

    handle(ctx) {
        try {
            if (this.handleFunc) {
                this.handleFunc(ctx);
            }
        } catch (error) {
            ctx.err = error;
        } finally {
            if (this.next && ctx.checked) {
                this.next.handle(ctx);
            }
            return ctx;
        }
    }
}

module.exports = Handler;