import { AssertChain } from '../assertChain'
import { Violations } from '../types'

export class RequiredAssert extends AssertChain {
  protected readonly code = 'required'

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (typeof value === 'undefined') {
      violations.push(this.code)
    }

    return this.next(violations, value)
  }
}
