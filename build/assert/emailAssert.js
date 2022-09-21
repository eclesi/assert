import AssertChain from '@/assertChain';
export default class EmailAssert extends AssertChain {
    static isValid(value) {
        if (typeof value !== 'string') {
            return false;
        }
        return EmailAssert.REGEX.test(value);
    }
    validate(violations, value) {
        if (EmailAssert.isValid(String(value)) === false) {
            violations.push(EmailAssert.CODE);
        }
        return this.next(violations, value);
    }
}
EmailAssert.CODE = 'email_type_mismatch';
EmailAssert.REGEX = /([a-z]+[a-z0-9]*[_\.]?[a-z0-9]+)@(([a-z0-9]+\.)*[a-z0-9]{2,}\.)+[a-z]{2,}/;
//# sourceMappingURL=emailAssert.js.map