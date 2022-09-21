import { parsePhoneNumberFromString } from 'libphonenumber-js'

import { Violations } from '@/types'
import AssertChain from '@/assertChain'

export default class PhoneAssert extends AssertChain {
  public readonly CODE = 'phone_type_mismatch'

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    const parsed = parsePhoneNumberFromString(String(value))

    if (typeof parsed === 'undefined') {
      violations.push(this.CODE)
    }

    return this.next(violations, value)
  }
}
