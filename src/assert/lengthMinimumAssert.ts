import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class LengthMinimumAssert extends AssertChain {
  constructor(
    protected readonly minimum: number,
    options: AssertOptions = { message: 'length_out_of_minimum' }
  ) {
    super(options)
  }

  isValid(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }

    if (value.length < this.minimum) {
      return false
    }

    return true
  }
}
