import { isEmpty } from 'radash'
import { AssertChain } from '../assertChain'
import { AssertOptions } from '../types'

export class NotEmptyAssert extends AssertChain {
  constructor(options: AssertOptions = { message: 'empty' }) {
    super(options)
  }

  isValid(value: unknown): boolean {
    return isEmpty(value) === false
  }
}
