class Handler {
    setNext(next) {
        this.next = next;
    }

    async handle(ctx) {
        try {
            if (this.handleFunc) {
                await this.handleFunc(ctx);
            }
        } catch (error) {
            ctx.err = error;
        } finally {
            if (this.next && !ctx.break) {
                this.next.handle(ctx);
            } else {
                return ctx;
            }
        }
    }
}