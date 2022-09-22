import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class StringAssert extends AssertChain {
  public static readonly MESSAGE = 'string_type_mismatch'

  constructor(options?: AssertOptions) {
    super(options ?? { message: StringAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    return typeof value === 'string'
  }
}
