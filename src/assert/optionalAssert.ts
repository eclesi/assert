import { Violations } from '@/types'
import AssertChain from '@/assertChain'

export default class OptionalAssert extends AssertChain {
  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (typeof value === 'undefined') {
      return []
    }

    return this.next(violations, value)
  }
}
