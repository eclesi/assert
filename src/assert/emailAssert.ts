import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class EmailAssert extends AssertChain {
  public static readonly MESSAGE = 'email_type_mismatch'

  constructor(options?: AssertOptions) {
    super(options ?? { message: EmailAssert.MESSAGE })
  }

  public static readonly REGEX =
    /([a-z]+[a-z0-9]*[_\.]?[a-z0-9]+)@(([a-z0-9]+\.)*[a-z0-9]{2,}\.)+[a-z]{2,}/

  isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    if (EmailAssert.REGEX.test(value) === false) {
      return false
    }

    return true
  }
}
