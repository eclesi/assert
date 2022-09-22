import { Assert } from '@/assert'

describe('Number Assert', () => {
  it('Should return undefined when the number is valid', () => {
    const assert = Assert.required().number()
    expect(assert.validate(99)).toBeUndefined()
  })

  it('Should return violations when the number is invalid', () => {
    const assert = Assert.required().number()
    expect(assert.validate('99')).toStrictEqual(['number_type_mismatch'])
  })

  it('Should return violations when the number is empty', () => {
    const assert = Assert.required().number()
    expect(assert.validate(undefined)).toStrictEqual(['required', 'number_type_mismatch'])
  })

  it('Should return undefined when the number assertion is optional', () => {
    const assert = Assert.optional().number()
    expect(assert.validate(undefined)).toBeUndefined()
  })

  it('Should return violation when the number assertion is optional but invalid number is provided', () => {
    const assert = Assert.optional().number()
    expect(assert.validate(true)).toStrictEqual(['number_type_mismatch'])
  })
})
