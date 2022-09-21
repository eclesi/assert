import { uniq } from 'lodash';
import AssertSchema from './assertSchema';
import EmailAssert from './assert/emailAssert';
import LengthMaximumAssert from './assert/lengthMaximumAssert';
import LengthMinimumAssert from './assert/lengthMinimumAssert';
import OptionalAssert from './assert/optionalAssert';
import RequiredAssert from './assert/requiredAssert';
import StringAssert from './assert/stringAssert';
import UuidAssert from './assert/uuidAssert';
import PhoneAssert from './assert/phoneAssert';
export class Assert {
    static required() {
        const assert = new RequiredAssert();
        const validator = new Assert();
        validator.headAssert = assert;
        validator.tailAssert = assert;
        return validator;
    }
    static optional() {
        const assert = new OptionalAssert();
        const validator = new Assert();
        validator.headAssert = assert;
        validator.tailAssert = assert;
        return validator;
    }
    static schemaStrict(schema) {
        return new AssertSchema(schema, true);
    }
    static schemaLoose(schema) {
        return new AssertSchema(schema, false);
    }
    string() {
        const assert = new StringAssert();
        this.tail(assert);
        return this;
    }
    email() {
        const assert = new EmailAssert();
        this.tail(assert);
        return this;
    }
    assert(assert) {
        this.tail(assert);
        return this;
    }
    phone() {
        const assert = new PhoneAssert();
        this.tail(assert);
        return this;
    }
    lengthMinimum(minimum) {
        const assert = new LengthMinimumAssert(minimum);
        this.tail(assert);
        return this;
    }
    lengthMaximum(maximum) {
        const assert = new LengthMaximumAssert(maximum);
        this.tail(assert);
        return this;
    }
    uuid() {
        const assert = new UuidAssert();
        this.tail(assert);
        return this;
    }
    async validateAsync(value) {
        const violations = await this.headAssert.validate([], value);
        if (violations.length === 0) {
            return undefined;
        }
        return uniq(violations);
    }
    validate(value) {
        const violations = this.headAssert.validate([], value);
        if (violations instanceof Promise) {
            throw new Error('Please use the method `validateAsync` to resolve the asynchronous asserts');
        }
        if (violations.length === 0) {
            return undefined;
        }
        return uniq(violations);
    }
    tail(assert) {
        this.tailAssert.addNext(assert);
        this.tailAssert = assert;
    }
}
//# sourceMappingURL=assert.js.map