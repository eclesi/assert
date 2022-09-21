import AssertChain from '@/assertChain';
export default class OptionalAssert extends AssertChain {
    validate(violations, value) {
        if (typeof value === 'undefined') {
            return [];
        }
        return this.next(violations, value);
    }
}
//# sourceMappingURL=optionalAssert.js.map