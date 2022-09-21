import AssertChain from '@/assertChain'
import { Violations } from '@/types'

export default class LengthMaximumAssert extends AssertChain {
  public static readonly CODE = 'length_out_of_maximum'

  constructor(protected readonly maximum: number) {
    super()
  }

  static isValid(maximum: number, value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    if (value.length > maximum) {
      return false
    }

    return true
  }

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (LengthMaximumAssert.isValid(this.maximum, value)) {
      violations.push(LengthMaximumAssert.CODE)
    }

    return this.next(violations, value)
  }
}
