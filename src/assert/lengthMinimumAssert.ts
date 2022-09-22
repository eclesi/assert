import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class LengthMinimumAssert extends AssertChain {
  public static readonly MESSAGE = 'length_out_of_minimum'

  constructor(protected readonly minimum: number, options?: AssertOptions) {
    super(options ?? { message: LengthMinimumAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    if (value.length < this.minimum) {
      return false
    }

    return true
  }
}
