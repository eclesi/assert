import AssertChain from '@/assertChain';
export default class LengthMaximumAssert extends AssertChain {
    constructor(maximum) {
        super();
        this.maximum = maximum;
    }
    static isValid(maximum, value) {
        if (typeof value !== 'string') {
            return false;
        }
        if (value.length > maximum) {
            return false;
        }
        return true;
    }
    validate(violations, value) {
        if (LengthMaximumAssert.isValid(this.maximum, value)) {
            violations.push(LengthMaximumAssert.CODE);
        }
        return this.next(violations, value);
    }
}
LengthMaximumAssert.CODE = 'length_out_of_maximum';
//# sourceMappingURL=lengthMaximumAssert.js.map