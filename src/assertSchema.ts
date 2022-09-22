import { RequiredAssert } from './assert/requiredAssert'
import { Assert } from './assert'
import { AnySchema, SchemaViolation } from './types'
import { OptionalAssert } from './assert/optionalAssert'

export class AssertSchema {
  constructor(protected readonly schema: AnySchema, protected readonly strict: boolean) {}

  protected strictTypeMismatch(value: unknown): SchemaViolation {
    const violations = {}

    if (typeof value !== 'object') {
      return violations
    }

    let required = 0
    let optional = 0

    for (const key in this.schema) {
      const assert = this.schema[key]
      if (assert instanceof AssertSchema) {
        if (assert.strict === true) required += 1
        if (assert.strict === false) optional += 1

        continue
      }

      if (assert.headAssert instanceof RequiredAssert) {
        required += 1
        continue
      }

      if (assert.headAssert instanceof OptionalAssert) {
        optional += 1
      }
    }

    if (this.strict === false) {
      return violations
    }

    if (required === 0) {
      return violations
    }

    if (Object.keys(value).length !== required + optional) {
      violations['schema'] = ['strict_type_mismatch']
    }

    return violations
  }

  validate(value: unknown): SchemaViolation | undefined {
    const violations = this.strictTypeMismatch(value)

    for (const key in this.schema) {
      const assert = this.schema[key]
      const input = value?.[key]

      if (assert instanceof Assert) {
        const result = assert.validate(input)

        if (result !== undefined) {
          violations[key] = result
        }

        continue
      }

      const result = assert.validate(input)

      if (result !== undefined) {
        violations[key] = result
      }
    }

    if (Object.keys(violations).length === 0) {
      return undefined
    }

    return violations
  }

  async validateAsync(value: unknown): Promise<SchemaViolation | undefined> {
    const violations = this.strictTypeMismatch(value)

    for (const key in this.schema) {
      const assert = this.schema[key]
      const input = value[key]

      if (assert instanceof Assert) {
        const result = await assert.validateAsync(input)

        if (result !== undefined) {
          violations[key] = result
        }

        continue
      }

      const result = assert.validate(input)

      if (result !== undefined) {
        violations[key] = result
      }
    }

    if (Object.keys(violations).length === 0) {
      return undefined
    }

    return violations
  }
}
