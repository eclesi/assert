import { Violations } from '@/types';
import AssertChain from '@/assertChain';
export default class StringAssert extends AssertChain {
    readonly CODE = "string_type_mismatch";
    validate(violations: Violations, value: unknown): Promise<Violations> | Violations;
}
//# sourceMappingURL=stringAssert.d.ts.map