import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class RequiredAssert extends AssertChain {
  public static readonly MESSAGE = 'required'

  constructor(options?: AssertOptions) {
    super(options ?? { message: RequiredAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    if (value === undefined) {
      return false
    }

    if (value === null) {
      return false
    }

    return true
  }
}
