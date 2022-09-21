import AssertChain from '@/assertChain';
export default class LengthMinimumAssert extends AssertChain {
    constructor(minimum) {
        super();
        this.minimum = minimum;
    }
    static isValid(minimum, value) {
        if (typeof value !== 'string') {
            return false;
        }
        if (value.length < minimum) {
            return false;
        }
        return true;
    }
    validate(violations, value) {
        if (LengthMinimumAssert.isValid(this.minimum, value)) {
            violations.push(LengthMinimumAssert.CODE);
        }
        return this.next(violations, value);
    }
}
LengthMinimumAssert.CODE = 'length_out_of_minimum';
//# sourceMappingURL=lengthMinimumAssert.js.map