import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class UuidAssert extends AssertChain {
  public static readonly MESSAGE = 'uuid_type_mismatch'
  public static readonly REGEX =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/

  constructor(options?: AssertOptions) {
    super(options ?? { message: UuidAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    return UuidAssert.REGEX.test(value)
  }
}
