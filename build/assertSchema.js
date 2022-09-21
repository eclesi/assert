import { get, set, isEmpty, isObject, keys } from 'lodash';
import RequiredAssert from './assert/requiredAssert';
import { Assert } from './assert';
export default class AssertSchema {
    constructor(schema, strict) {
        this.schema = schema;
        this.strict = strict;
    }
    strictTypeMismatch(value) {
        const violations = {};
        let required = 0;
        for (const key in this.schema) {
            if (this.schema[key].headAssert instanceof RequiredAssert) {
                required += 1;
            }
        }
        if (!isObject(value)) {
            violations['schema'] = ['strict_type_mismatch'];
        }
        if (this.strict && isObject(value)) {
            if (keys(value).length < required) {
                violations['schema'] = ['strict_type_mismatch'];
            }
        }
        return violations;
    }
    validate(value) {
        const violations = this.strictTypeMismatch(value);
        for (const key in this.schema) {
            const assert = get(this.schema, key);
            const input = get(value, key);
            if (assert instanceof Assert) {
                const result = assert.validate(input);
                if (result !== undefined) {
                    set(violations, key, result);
                }
                continue;
            }
            const assertSchema = new AssertSchema(assert, this.strict);
            const result = assertSchema.validate(input);
            if (result !== undefined) {
                set(violations, key, result);
            }
        }
        if (isEmpty(violations)) {
            return undefined;
        }
        return violations;
    }
    async validateAsync(value) {
        const violations = this.strictTypeMismatch(value);
        for (const key in this.schema) {
            const assert = get(this.schema, key);
            const input = get(value, key);
            if (assert instanceof Assert) {
                const result = await assert.validateAsync(input);
                if (result !== undefined) {
                    set(violations, key, result);
                }
                continue;
            }
            const assertSchema = new AssertSchema(assert, this.strict);
            const result = assertSchema.validate(input);
            if (result !== undefined) {
                set(violations, key, result);
            }
        }
        if (isEmpty(violations)) {
            return undefined;
        }
        return violations;
    }
}
//# sourceMappingURL=assertSchema.js.map