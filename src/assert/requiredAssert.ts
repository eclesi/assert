import { AssertChain } from '../assertChain'
import { Violations } from '../types'

export class RequiredAssert extends AssertChain {
  public static readonly CODE = 'required'

  static isValid(value: unknown): boolean {
    if (value === undefined) {
      return false
    }

    if (value === null) {
      return false
    }
    return true
  }

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (RequiredAssert.isValid(value) === false) {
      violations.push(RequiredAssert.CODE)
    }

    return this.next(violations, value)
  }
}
