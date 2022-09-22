import { isEmpty } from 'radash'
import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class NotEmptyAssert extends AssertChain {
  public static readonly MESSAGE = 'empty'

  constructor(options?: AssertOptions) {
    super(options ?? { message: NotEmptyAssert.MESSAGE })
  }

  isValid(value: unknown): boolean {
    return isEmpty(value) === false
  }
}
