import { Assert } from '@/assert'

describe('Email Assert', () => {
  it('Should return undefined when the string is valid', () => {
    const assert = Assert.required().string()
    expect(assert.validate('Any String')).toBeUndefined()
  })

  it('Should return violations when the string is invalid', () => {
    const assert = Assert.required().string()
    expect(assert.validate(999)).toStrictEqual(['string_type_mismatch'])
  })

  it('Should return violations when the string is empty', () => {
    const assert = Assert.required().string()
    expect(assert.validate(undefined)).toStrictEqual(['required', 'string_type_mismatch'])
  })

  it('Should return undefined when the string assertion is optional', () => {
    const assert = Assert.optional().string()
    expect(assert.validate(undefined)).toBeUndefined()
  })

  it('Should return violation when the string assertion is optional but invalid string is provided', () => {
    const assert = Assert.optional().string()
    expect(assert.validate(true)).toStrictEqual(['string_type_mismatch'])
  })
})
