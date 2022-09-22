import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class UuidAssert extends AssertChain {
  public readonly REGEX =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/

  constructor(options: AssertOptions = { message: 'uuid_type_mismatch' }) {
    super(options)
  }

  isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    return this.REGEX.test(value)
  }
}
