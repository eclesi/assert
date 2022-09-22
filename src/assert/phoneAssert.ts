import { parsePhoneNumberFromString } from 'libphonenumber-js'

import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class PhoneAssert extends AssertChain {
  public static readonly MESSAGE = 'phone_type_mismatch'

  constructor(options?: AssertOptions) {
    super(options ?? { message: PhoneAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    const parsed = parsePhoneNumberFromString(String(value))

    if (typeof parsed === 'undefined') {
      return false
    }

    return parsed.isValid()
  }
}
