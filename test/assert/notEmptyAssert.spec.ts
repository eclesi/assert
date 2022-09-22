import { Assert } from '@/assert'

describe('Not Empty Assert', () => {
  it('Should return undefined when the value is valid', () => {
    const assert = Assert.required().notEmpty()
    expect(assert.validate('Any')).toBeUndefined()
  })

  it('Should return violations when the value is invalid', () => {
    const assert = Assert.required().notEmpty()
    expect(assert.validate('')).toStrictEqual(['empty'])
    expect(assert.validate([])).toStrictEqual(['empty'])
    expect(assert.validate({})).toStrictEqual(['empty'])
    expect(assert.validate(undefined)).toStrictEqual(['required', 'empty'])
    expect(assert.validate(null)).toStrictEqual(['required', 'empty'])
  })

  it('Should return violations when the value is empty', () => {
    const assert = Assert.required().notEmpty()
    expect(assert.validate(undefined)).toStrictEqual(['required', 'empty'])
  })

  it('Should return undefined when the value assertion is optional', () => {
    const assert = Assert.optional().notEmpty()
    expect(assert.validate(undefined)).toBeUndefined()
  })

  it('Should return violation when the value assertion is optional but invalid value is provided', () => {
    const assert = Assert.optional().notEmpty()
    expect(assert.validate({})).toBeUndefined()
  })
})
