import { AssertChain } from '../assertChain'
import { Violations } from '../types'

export class LengthMinimumAssert extends AssertChain {
  public static readonly CODE = 'length_out_of_minimum'

  constructor(protected readonly minimum: number) {
    super()
  }

  static isValid(minimum: number, value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    if (value.length < minimum) {
      return false
    }

    return true
  }

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (LengthMinimumAssert.isValid(this.minimum, value) === false) {
      violations.push(LengthMinimumAssert.CODE)
    }

    return this.next(violations, value)
  }
}
