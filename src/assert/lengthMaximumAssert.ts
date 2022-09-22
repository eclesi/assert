import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class LengthMaximumAssert extends AssertChain {
  constructor(
    protected readonly maximum: number,
    options: AssertOptions = { message: 'length_out_of_maximum' }
  ) {
    super(options)
  }

  isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    if (value.length > this.maximum) {
      return false
    }

    return true
  }
}
