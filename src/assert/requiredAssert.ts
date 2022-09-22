import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class RequiredAssert extends AssertChain {
  constructor(options: AssertOptions = { message: 'required' }) {
    super(options)
  }

  isValid(value: unknown): boolean {
    if (value === undefined) {
      return false
    }

    if (value === null) {
      return false
    }

    return true
  }
}
