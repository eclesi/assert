import { uniq } from 'lodash'

import AssertChain from './assertChain'
import AssertSchema from './assertSchema'
import EmailAssert from './assert/emailAssert'
import LengthMaximumAssert from './assert/lengthMaximumAssert'
import LengthMinimumAssert from './assert/lengthMinimumAssert'
import OptionalAssert from './assert/optionalAssert'
import RequiredAssert from './assert/requiredAssert'
import StringAssert from './assert/stringAssert'
import UuidAssert from './assert/uuidAssert'
import PhoneAssert from './assert/phoneAssert'
import { AnySchema, Violations } from './types'

export class Assert {
  public headAssert: AssertChain
  public tailAssert: AssertChain

  static required(): Assert {
    const assert = new RequiredAssert()

    const validator = new Assert()
    validator.headAssert = assert
    validator.tailAssert = assert

    return validator
  }

  static optional(): Assert {
    const assert = new OptionalAssert()

    const validator = new Assert()
    validator.headAssert = assert
    validator.tailAssert = assert

    return validator
  }

  static schemaStrict(schema: AnySchema): AssertSchema {
    return new AssertSchema(schema, true)
  }

  static schemaLoose(schema: AnySchema): AssertSchema {
    return new AssertSchema(schema, false)
  }

  string(): Assert {
    const assert = new StringAssert()
    this.tail(assert)

    return this
  }

  email(): Assert {
    const assert = new EmailAssert()
    this.tail(assert)

    return this
  }

  assert(assert: AssertChain): Assert {
    this.tail(assert)

    return this
  }

  phone(): Assert {
    const assert = new PhoneAssert()
    this.tail(assert)

    return this
  }

  lengthMinimum(minimum: number): Assert {
    const assert = new LengthMinimumAssert(minimum)
    this.tail(assert)

    return this
  }

  lengthMaximum(maximum: number): Assert {
    const assert = new LengthMaximumAssert(maximum)
    this.tail(assert)

    return this
  }

  uuid(): Assert {
    const assert = new UuidAssert()
    this.tail(assert)

    return this
  }

  async validateAsync(value: unknown): Promise<Violations | undefined> {
    const violations = await this.headAssert.validate([], value)

    if (violations.length === 0) {
      return undefined
    }

    return uniq(violations)
  }

  validate(value: unknown): Violations | undefined {
    const violations = this.headAssert.validate([], value)

    if (violations instanceof Promise) {
      throw new Error('Please use the method `validateAsync` to resolve the asynchronous asserts')
    }

    if (violations.length === 0) {
      return undefined
    }

    return uniq(violations)
  }

  protected tail(assert: AssertChain): void {
    this.tailAssert.addNext(assert)
    this.tailAssert = assert
  }
}
