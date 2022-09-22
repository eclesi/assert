import { AssertChain } from '../assertChain'
import { Violations } from '../types'

export class StringAssert extends AssertChain {
  public readonly CODE = 'string_type_mismatch'

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (typeof value !== 'string') {
      violations.push(this.CODE)
    }

    return this.next(violations, value)
  }
}
