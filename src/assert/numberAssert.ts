import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class NumberAssert extends AssertChain {
  constructor(options: AssertOptions = { message: 'number_type_mismatch' }) {
    super(options)
  }

  isValid(value: unknown): boolean {
    return typeof value === 'number'
  }
}
