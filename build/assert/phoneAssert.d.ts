import { Violations } from '@/types';
import AssertChain from '@/assertChain';
export default class PhoneAssert extends AssertChain {
    readonly CODE = "phone_type_mismatch";
    validate(violations: Violations, value: unknown): Promise<Violations> | Violations;
}
//# sourceMappingURL=phoneAssert.d.ts.map