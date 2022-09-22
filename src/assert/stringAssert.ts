import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class StringAssert extends AssertChain {
  constructor(options: AssertOptions = { message: 'string_type_mismatch' }) {
    super(options)
  }

  isValid(value: unknown): boolean {
    return typeof value === 'string'
  }
}
