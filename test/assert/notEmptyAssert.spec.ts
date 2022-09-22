import { Assert } from '@/assert'

describe('Number Assert', () => {
  it('Should return undefined when the value is valid', () => {
    const assert = Assert.required().notEmpty()
    expect(assert.validate('Any')).toBeUndefined()
  })

  it('Should return violations when the value is invalid', () => {
    const assert = Assert.required().notEmpty()
    expect(assert.validate('')).toStrictEqual(['not_empty'])
    expect(assert.validate([])).toStrictEqual(['not_empty'])
    expect(assert.validate({})).toStrictEqual(['not_empty'])
    expect(assert.validate(undefined)).toStrictEqual(['required', 'not_empty'])
    expect(assert.validate(null)).toStrictEqual(['required', 'not_empty'])
  })

  it('Should return violations when the value is empty', () => {
    const assert = Assert.required().notEmpty()
    expect(assert.validate(undefined)).toStrictEqual(['required', 'not_empty'])
  })

  it('Should return undefined when the value assertion is optional', () => {
    const assert = Assert.optional().notEmpty()
    expect(assert.validate(undefined)).toBeUndefined()
  })

  it('Should return violation when the value assertion is optional but invalid value is provided', () => {
    const assert = Assert.optional().notEmpty()
    expect(assert.validate({})).toStrictEqual(['not_empty'])
  })
})
