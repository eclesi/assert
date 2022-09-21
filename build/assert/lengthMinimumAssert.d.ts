import AssertChain from '@/assertChain';
import { Violations } from '@/types';
export default class LengthMinimumAssert extends AssertChain {
    protected readonly minimum: number;
    static readonly CODE = "length_out_of_minimum";
    constructor(minimum: number);
    static isValid(minimum: number, value: unknown): boolean;
    validate(violations: Violations, value: unknown): Promise<Violations> | Violations;
}
//# sourceMappingURL=lengthMinimumAssert.d.ts.map