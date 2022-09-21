import AssertChain from '@/assertChain';
export default class RequiredAssert extends AssertChain {
    constructor() {
        super(...arguments);
        this.code = 'required';
    }
    validate(violations, value) {
        if (typeof value === 'undefined') {
            violations.push(this.code);
        }
        return this.next(violations, value);
    }
}
//# sourceMappingURL=requiredAssert.js.map