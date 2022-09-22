import { Violations } from '@/types'
import { AssertChain } from '@/assertChain'

export class RequiredAssert extends AssertChain {
  protected readonly code = 'required'

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (typeof value === 'undefined') {
      violations.push(this.code)
    }

    return this.next(violations, value)
  }
}
