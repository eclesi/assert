import { isEmpty } from 'radash'
import { AssertChain } from '../assertChain'
import { Violations } from '../types'

export class NotEmptyAssert extends AssertChain {
  public static readonly CODE = 'not_empty'

  static isValid(value: unknown): boolean {
    if (isEmpty(value)) {
      return false
    }

    return true
  }

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (NotEmptyAssert.isValid(value) === false) {
      violations.push(NotEmptyAssert.CODE)
    }

    return this.next(violations, value)
  }
}
