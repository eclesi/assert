import { Violations } from "@/types";

export default abstract class AssertChain {
  protected nextAssert?: AssertChain;

  abstract validate(
    violations: Violations,
    value: unknown
  ): Promise<Violations> | Violations;

  addNext(assert: AssertChain): void {
    this.nextAssert = assert;
  }

  next(
    violations: Violations,
    value: unknown
  ): Promise<Violations> | Violations {
    if (this.nextAssert) {
      return this.nextAssert.validate(violations, value);
    }

    return violations;
  }
}
