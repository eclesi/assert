import { Assert } from '@/assert'

describe('String Assert', () => {
  it('Should return undefined when the lengthMinimum is valid', () => {
    const assert = Assert.required().lengthMinimum(4)
    expect(assert.validate('Any String')).toBeUndefined()
  })

  it('Should return violations when the lengthMinimum is invalid', () => {
    const assert = Assert.required().lengthMinimum(4)
    expect(assert.validate(999)).toStrictEqual(['length_out_of_minimum'])
  })

  it('Should return violations when the lengthMinimum is empty', () => {
    const assert = Assert.required().lengthMinimum(4)
    expect(assert.validate(undefined)).toStrictEqual(['required', 'length_out_of_minimum'])
  })

  it('Should return undefined when the lengthMinimum assertion is optional', () => {
    const assert = Assert.optional().lengthMinimum(4)
    expect(assert.validate(undefined)).toBeUndefined()
  })

  it('Should return violation when the lengthMinimum assertion is optional but invalid lengthMinimum is provided', () => {
    const assert = Assert.optional().lengthMinimum(4)
    expect(assert.validate(true)).toStrictEqual(['length_out_of_minimum'])
  })
})
