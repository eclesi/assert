import AssertChain from '@/assertChain';
import { Violations } from '@/types';
export default class EmailAssert extends AssertChain {
    static readonly CODE = "email_type_mismatch";
    static readonly REGEX: RegExp;
    static isValid(value: unknown): boolean;
    validate(violations: Violations, value: unknown): Promise<Violations> | Violations;
}
//# sourceMappingURL=emailAssert.d.ts.map