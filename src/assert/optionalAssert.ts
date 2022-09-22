import { isEmpty } from 'radash'
import { AssertChain } from '../assertChain'
import { AssertOptions, Violations } from '../types'

export class OptionalAssert extends AssertChain {
  public static readonly MESSAGE = 'required'

  constructor(options?: AssertOptions) {
    super(options ?? { message: OptionalAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    if (value === true || value === false) {
      return false
    }

    if (isEmpty(value)) {
      return true
    }

    return false
  }

  isEmpty(value: unknown): boolean {
    return this.isValid(value)
  }

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (this.isEmpty(value)) {
      return []
    }

    return this.next(violations, value)
  }
}
