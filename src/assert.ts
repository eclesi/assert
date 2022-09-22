import { unique } from 'radash'

import { AnySchema, AssertOptions, Violations } from './types'
import { AssertChain } from './assertChain'
import { AssertSchema } from './assertSchema'
import { EmailAssert } from './assert/emailAssert'
import { LengthMaximumAssert } from './assert/lengthMaximumAssert'
import { LengthMinimumAssert } from './assert/lengthMinimumAssert'
import { NotEmptyAssert } from './assert/notEmptyAssert'
import { NumberAssert } from './assert/numberAssert'
import { OptionalAssert } from './assert/optionalAssert'
import { PhoneAssert } from './assert/phoneAssert'
import { RequiredAssert } from './assert/requiredAssert'
import { StringAssert } from './assert/stringAssert'
import { UuidAssert } from './assert/uuidAssert'

export class Assert {
  public headAssert: AssertChain
  public tailAssert: AssertChain

  static required(options?: AssertOptions): Assert {
    const assert = new RequiredAssert(options)

    const validator = new Assert()
    validator.headAssert = assert
    validator.tailAssert = assert

    return validator
  }

  static optional(options?: AssertOptions): Assert {
    const assert = new OptionalAssert(options)

    const validator = new Assert()
    validator.headAssert = assert
    validator.tailAssert = assert

    return validator
  }

  static strict(schema: AnySchema): AssertSchema {
    return new AssertSchema(schema, true)
  }

  static loose(schema: AnySchema): AssertSchema {
    return new AssertSchema(schema, false)
  }

  string(options?: AssertOptions): Assert {
    const assert = new StringAssert(options)
    this.tail(assert)

    return this
  }

  number(options?: AssertOptions): Assert {
    const assert = new NumberAssert(options)
    this.tail(assert)

    return this
  }

  email(options?: AssertOptions): Assert {
    const assert = new EmailAssert(options)
    this.tail(assert)

    return this
  }

  assert(assert: AssertChain): Assert {
    this.tail(assert)

    return this
  }

  phone(options?: AssertOptions): Assert {
    const assert = new PhoneAssert(options)
    this.tail(assert)

    return this
  }

  lengthMinimum(minimum: number, options?: AssertOptions): Assert {
    const assert = new LengthMinimumAssert(minimum, options)
    this.tail(assert)

    return this
  }

  lengthMaximum(maximum: number, options?: AssertOptions): Assert {
    const assert = new LengthMaximumAssert(maximum, options)
    this.tail(assert)

    return this
  }

  notEmpty(options?: AssertOptions): Assert {
    const assert = new NotEmptyAssert(options)
    this.tail(assert)

    return this
  }

  uuid(options?: AssertOptions): Assert {
    const assert = new UuidAssert(options)
    this.tail(assert)

    return this
  }

  async validateAsync(value: unknown): Promise<Violations | undefined> {
    const violations = await this.headAssert.validate([], value)

    if (violations.length === 0) {
      return undefined
    }

    return unique(violations)
  }

  validate(value: unknown): Violations | undefined {
    const violations = this.headAssert.validate([], value)

    if (violations instanceof Promise) {
      throw new Error('Please use the method `validateAsync` to resolve the asynchronous asserts')
    }

    if (violations.length === 0) {
      return undefined
    }

    return unique(violations)
  }

  protected tail(assert: AssertChain): void {
    this.tailAssert.addNext(assert)
    this.tailAssert = assert
  }
}
