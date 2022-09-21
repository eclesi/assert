import AssertChain from '@/assertChain';
import { Violations } from '@/types';
export default class UuidAssert extends AssertChain {
    static readonly CODE = "uuid_type_mismatch";
    static readonly REGEX: RegExp;
    static isValid(value: unknown): boolean;
    validate(violations: Violations, value: unknown): Promise<Violations> | Violations;
}
//# sourceMappingURL=uuidAssert.d.ts.map