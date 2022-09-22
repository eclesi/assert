import { AssertChain } from '@/assertChain'
import { Violations } from '@/types'

export class UuidAssert extends AssertChain {
  public static readonly CODE = 'uuid_type_mismatch'
  public static readonly REGEX =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/

  static isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    return UuidAssert.REGEX.test(value)
  }

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (UuidAssert.isValid(String(value)) === false) {
      violations.push(UuidAssert.CODE)
    }

    return this.next(violations, value)
  }
}
