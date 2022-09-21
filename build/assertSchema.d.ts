import { AnySchema, SchemaViolation } from './types';
export default class AssertSchema {
    protected readonly schema: AnySchema;
    protected readonly strict: boolean;
    constructor(schema: AnySchema, strict: boolean);
    protected strictTypeMismatch(value: unknown): SchemaViolation;
    validate(value: unknown): SchemaViolation | undefined;
    validateAsync(value: unknown): Promise<SchemaViolation | undefined>;
}
//# sourceMappingURL=assertSchema.d.ts.map