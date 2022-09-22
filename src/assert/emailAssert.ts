import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class EmailAssert extends AssertChain {
  public readonly REGEX =
    /([a-z]+[a-z0-9]*[_\.]?[a-z0-9]+)@(([a-z0-9]+\.)*[a-z0-9]{2,}\.)+[a-z]{2,}/

  constructor(options: AssertOptions = { message: 'email_type_mismatch' }) {
    super(options)
  }

  isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    if (this.REGEX.test(value) === false) {
      return false
    }

    return true
  }
}
