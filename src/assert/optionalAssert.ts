import { AssertChain } from '../assertChain'
import { Violations } from '../types'

export class OptionalAssert extends AssertChain {
  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (typeof value === 'undefined') {
      return []
    }

    return this.next(violations, value)
  }
}
