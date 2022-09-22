import { AssertChain } from '@/assertChain'
import { Violations } from '@/types'

export class EmailAssert extends AssertChain {
  public static readonly CODE = 'email_type_mismatch'
  public static readonly REGEX =
    /([a-z]+[a-z0-9]*[_\.]?[a-z0-9]+)@(([a-z0-9]+\.)*[a-z0-9]{2,}\.)+[a-z]{2,}/

  static isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    return EmailAssert.REGEX.test(value)
  }

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (EmailAssert.isValid(String(value)) === false) {
      violations.push(EmailAssert.CODE)
    }

    return this.next(violations, value)
  }
}
