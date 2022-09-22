import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class LengthMaximumAssert extends AssertChain {
  public static readonly MESSAGE = 'length_out_of_maximum'

  constructor(protected readonly maximum: number, options?: AssertOptions) {
    super(options ?? { message: LengthMaximumAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    if (value.length > this.maximum) {
      return false
    }

    return true
  }
}
