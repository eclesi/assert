import { Assert } from '@/assert'

describe('Assert Schema', () => {
  it('Should return undefined when the input is valid', () => {
    const schema = Assert.schemaStrict({
      email: Assert.required().string().email(),
      phone: Assert.required().string().phone(),
      password: Assert.required().string().lengthMinimum(8)
    })

    expect(
      schema.validate({ email: 'any@email.com', phone: '+559999999999', password: 's3cur3p4ss0rd' })
    ).toBeUndefined()
  })

  it('Should return undefined when the input is valid', () => {
    const schema = Assert.schemaStrict({
      email: Assert.required().string().email(),
      phone: Assert.required().string().phone(),
      password: Assert.required().string().lengthMinimum(8)
    })

    expect(
      schema.validate({
        email: 'any@email.com',
        phone: '+559999999999',
        password: 's3cur3p4ss0rd',
        extra: 'unknown'
      })
    ).toStrictEqual({ schema: ['strict_type_mismatch'] })
  })

  it('Should return violations when the input is empty', () => {
    const schema = Assert.schemaStrict({
      email: Assert.required().string().email(),
      phone: Assert.required().string().phone(),
      password: Assert.required().string().lengthMinimum(8)
    })

    expect(schema.validate({})).toStrictEqual({
      schema: ['strict_type_mismatch'],
      email: ['required', 'string_type_mismatch', 'email_type_mismatch'],
      phone: ['required', 'string_type_mismatch', 'phone_type_mismatch'],
      password: ['required', 'string_type_mismatch', 'length_out_of_minimum']
    })
  })

  it('Should return undefined when the input is empty but all assertions are optional', () => {
    const schema = Assert.schemaStrict({
      email: Assert.optional().string().email(),
      phone: Assert.optional().string().phone(),
      password: Assert.optional().string().lengthMinimum(8)
    })

    expect(schema.validate({})).toBeUndefined()
  })

  it('Should return violations when the input is empty and at least one assertion is required', () => {
    const schema = Assert.schemaStrict({
      email: Assert.required().string().email(),
      phone: Assert.optional().string().phone(),
      password: Assert.optional().string().lengthMinimum(8)
    })

    expect(schema.validate({})).toStrictEqual({
      schema: ['strict_type_mismatch'],
      email: ['required', 'string_type_mismatch', 'email_type_mismatch']
    })
  })
})
