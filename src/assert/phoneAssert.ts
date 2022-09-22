import { parsePhoneNumberFromString } from 'libphonenumber-js'

import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class PhoneAssert extends AssertChain {
  constructor(options: AssertOptions = { message: 'phone_type_mismatch' }) {
    super(options)
  }

  isValid(value: unknown): boolean {
    const parsed = parsePhoneNumberFromString(String(value))

    if (typeof parsed === 'undefined') {
      return false
    }

    return parsed.isValid()
  }
}
