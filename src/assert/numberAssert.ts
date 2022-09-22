import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class NumberAssert extends AssertChain {
  public static readonly MESSAGE = 'number_type_mismatch'

  constructor(options?: AssertOptions) {
    super(options ?? { message: NumberAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    return typeof value === 'number'
  }
}
