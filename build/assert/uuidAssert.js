import AssertChain from '@/assertChain';
export default class UuidAssert extends AssertChain {
    static isValid(value) {
        if (typeof value !== 'string') {
            return false;
        }
        return UuidAssert.REGEX.test(value);
    }
    validate(violations, value) {
        if (UuidAssert.isValid(String(value)) === false) {
            violations.push(UuidAssert.CODE);
        }
        return this.next(violations, value);
    }
}
UuidAssert.CODE = 'uuid_type_mismatch';
UuidAssert.REGEX = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
//# sourceMappingURL=uuidAssert.js.map