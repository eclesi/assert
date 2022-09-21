import { Assert } from '@/assert'

describe('Email Assert', () => {
  it('Should return undefined when the email is valid', () => {
    const assert = Assert.required().email()
    expect(assert.validate('alef@gmail.com')).toBeUndefined()
  })

  it('Should return violations when the email is invalid', () => {
    const assert = Assert.required().email()
    expect(assert.validate('invalid.com')).toStrictEqual(['email_type_mismatch'])
  })

  it('Should return violations when the email is empty', () => {
    const assert = Assert.required().email()
    expect(assert.validate(undefined)).toStrictEqual(['required', 'email_type_mismatch'])
  })

  it('Should return undefined when the email assertion is optional', () => {
    const assert = Assert.optional().email()
    expect(assert.validate(undefined)).toBeUndefined()
  })

  it('Should return violation when the email assertion is optional but invalid email is provided', () => {
    const assert = Assert.optional().email()
    expect(assert.validate('invalid.com')).toStrictEqual(['email_type_mismatch'])
  })
})
