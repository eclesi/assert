import { Violations } from '@/types';
export default abstract class AssertChain {
    protected nextAssert?: AssertChain;
    abstract validate(violations: Violations, value: unknown): Promise<Violations> | Violations;
    addNext(assert: AssertChain): void;
    next(violations: Violations, value: unknown): Promise<Violations> | Violations;
}
//# sourceMappingURL=assertChain.d.ts.map