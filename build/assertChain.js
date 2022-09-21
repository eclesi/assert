export default class AssertChain {
    addNext(assert) {
        this.nextAssert = assert;
    }
    next(violations, value) {
        if (this.nextAssert) {
            return this.nextAssert.validate(violations, value);
        }
        return violations;
    }
}
//# sourceMappingURL=assertChain.js.map