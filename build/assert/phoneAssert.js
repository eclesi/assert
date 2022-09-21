import { parsePhoneNumberFromString } from 'libphonenumber-js';
import AssertChain from '@/assertChain';
export default class PhoneAssert extends AssertChain {
    constructor() {
        super(...arguments);
        this.CODE = 'phone_type_mismatch';
    }
    validate(violations, value) {
        const parsed = parsePhoneNumberFromString(String(value));
        if (typeof parsed === 'undefined') {
            violations.push(this.CODE);
        }
        return this.next(violations, value);
    }
}
//# sourceMappingURL=phoneAssert.js.map