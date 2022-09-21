import AssertChain from '@/assertChain';
import { Violations } from '@/types';
export default class LengthMaximumAssert extends AssertChain {
    protected readonly maximum: number;
    static readonly CODE = "length_out_of_maximum";
    constructor(maximum: number);
    static isValid(maximum: number, value: unknown): boolean;
    validate(violations: Violations, value: unknown): Promise<Violations> | Violations;
}
//# sourceMappingURL=lengthMaximumAssert.d.ts.map