import { isString } from "lodash";

import { Violations } from "@/types";
import AssertChain from "@/assertChain";

export default class StringAssert extends AssertChain {
  public readonly CODE = "string_type_mismatch";

  validate(
    violations: Violations,
    value: unknown
  ): Promise<Violations> | Violations {
    if (typeof value !== "string") {
      violations.push(this.CODE);
    }

    return this.next(violations, value);
  }
}
