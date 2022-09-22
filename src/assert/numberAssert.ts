import { Violations } from '@/types'
import AssertChain from '@/assertChain'

export default class NumberAssert extends AssertChain {
  public readonly CODE = 'number_type_mismatch'

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (typeof value !== 'number') {
      violations.push(this.CODE)
    }

    return this.next(violations, value)
  }
}
