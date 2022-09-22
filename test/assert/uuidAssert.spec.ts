import { Assert } from '@/assert'

describe('Uuid Assert', () => {
  it('Should return undefined when the uuid is valid', () => {
    const assert = Assert.required().uuid()
    expect(assert.validate('d904bb89-e3f3-4d2e-991c-e92b11226cf5')).toBeUndefined()
  })

  it('Should return violations when the uuid is invalid', () => {
    const assert = Assert.required().uuid()
    expect(assert.validate('any')).toStrictEqual(['uuid_type_mismatch'])
  })

  it('Should return violations when the uuid is empty', () => {
    const assert = Assert.required().uuid()
    expect(assert.validate(undefined)).toStrictEqual(['required', 'uuid_type_mismatch'])
  })

  it('Should return undefined when the uuid assertion is optional', () => {
    const assert = Assert.optional().uuid()
    expect(assert.validate(undefined)).toBeUndefined()
  })

  it('Should return violation when the uuid assertion is optional but invalid uuid is provided', () => {
    const assert = Assert.optional().uuid()
    expect(assert.validate('any')).toStrictEqual(['uuid_type_mismatch'])
  })
})
