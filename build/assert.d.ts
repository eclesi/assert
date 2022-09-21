import AssertChain from './assertChain';
import AssertSchema from './assertSchema';
import { AnySchema, Violations } from './types';
export declare class Assert {
    headAssert: AssertChain;
    tailAssert: AssertChain;
    static required(): Assert;
    static optional(): Assert;
    static schemaStrict(schema: AnySchema): AssertSchema;
    static schemaLoose(schema: AnySchema): AssertSchema;
    string(): Assert;
    email(): Assert;
    assert(assert: AssertChain): Assert;
    phone(): Assert;
    lengthMinimum(minimum: number): Assert;
    lengthMaximum(maximum: number): Assert;
    uuid(): Assert;
    validateAsync(value: unknown): Promise<Violations | undefined>;
    validate(value: unknown): Violations | undefined;
    protected tail(assert: AssertChain): void;
}
//# sourceMappingURL=assert.d.ts.map