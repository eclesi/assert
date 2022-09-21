import AssertChain from '@/assertChain';
export default class StringAssert extends AssertChain {
    constructor() {
        super(...arguments);
        this.CODE = 'string_type_mismatch';
    }
    validate(violations, value) {
        if (typeof value !== 'string') {
            violations.push(this.CODE);
        }
        return this.next(violations, value);
    }
}
//# sourceMappingURL=stringAssert.js.map