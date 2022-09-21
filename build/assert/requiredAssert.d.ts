import { Violations } from '@/types';
import AssertChain from '@/assertChain';
export default class RequiredAssert extends AssertChain {
    protected readonly code = "required";
    validate(violations: Violations, value: unknown): Promise<Violations> | Violations;
}
//# sourceMappingURL=requiredAssert.d.ts.map