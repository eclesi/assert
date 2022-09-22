import { Assert } from '@/assert'

describe('Email Assert', () => {
  it('Should return undefined when the phone is valid', () => {
    const assert = Assert.required().phone()
    expect(assert.validate('+5599999999999')).toBeUndefined()
  })

  it('Should return violations when the phone is invalid', () => {
    const assert = Assert.required().phone()
    expect(assert.validate('+559a999999999')).toStrictEqual(['phone_type_mismatch'])
  })

  it('Should return violations when the phone is empty', () => {
    const assert = Assert.required().phone()
    expect(assert.validate(undefined)).toStrictEqual(['required', 'phone_type_mismatch'])
  })

  it('Should return undefined when the phone assertion is optional', () => {
    const assert = Assert.optional().phone()
    expect(assert.validate(undefined)).toBeUndefined()
  })

  it('Should return violation when the phone assertion is optional but invalid phone is provided', () => {
    const assert = Assert.optional().phone()
    expect(assert.validate('+559a999999999')).toStrictEqual(['phone_type_mismatch'])
  })
})
