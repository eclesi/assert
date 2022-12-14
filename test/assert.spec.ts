import { Assert } from '@/assert'

describe('Assert Schema', () => {
  it('Should return undefined when the input is valid', () => {
    const schema = Assert.strict({
      email: Assert.required().string().email(),
      phone: Assert.required().string().phone(),
      password: Assert.required().string().lengthMinimum(8)
    })

    expect(
      schema.validate({ email: 'any@email.com', phone: '+559999999999', password: 's3cur3p4ss0rd' })
    ).toBeUndefined()
  })

  it('Should return undefined when the input is valid', () => {
    const schema = Assert.strict({
      fullName: Assert.strict({
        firstName: Assert.required().string(),
        lastName: Assert.required().string()
      }),
      email: Assert.required().email(),
      phone: Assert.required().phone(),
      password: Assert.required().string().lengthMinimum(8)
    })

    expect(
      schema.validate({
        fullName: {
          firstName: 'Alef',
          lastName: 'Castelo'
        },
        email: 'any@email.com',
        phone: '+559999999999',
        password: 'supersecret'
      })
    ).toBeUndefined()
  })

  it('Should return violations when the input is invalid with nested assertion', () => {
    const schema = Assert.strict({
      fullName: Assert.strict({
        firstName: Assert.required().string(),
        lastName: Assert.required().string()
      }),
      email: Assert.required().email(),
      phone: Assert.required().phone(),
      password: Assert.required().string().lengthMinimum(8)
    })

    expect(schema.validate({})).toStrictEqual({
      schema: ['strict_type_mismatch'],
      fullName: {
        firstName: ['required', 'string_type_mismatch'],
        lastName: ['required', 'string_type_mismatch']
      },
      email: ['required', 'email_type_mismatch'],
      phone: ['required', 'phone_type_mismatch'],
      password: ['required', 'string_type_mismatch', 'length_out_of_minimum']
    })
  })

  it('Should return flat violations when the input is invalid with nested assertion', () => {
    const schema = Assert.strict({
      fullName: Assert.strict({
        firstName: Assert.required().string(),
        lastName: Assert.required().string()
      }),
      email: Assert.required().email(),
      phone: Assert.required().phone(),
      password: Assert.required().string().lengthMinimum(8)
    })

    expect(schema.validate({}, { flat: true })).toStrictEqual({
      schema: ['strict_type_mismatch'],
      'fullName.firstName': ['required', 'string_type_mismatch'],
      'fullName.lastName': ['required', 'string_type_mismatch'],
      email: ['required', 'email_type_mismatch'],
      phone: ['required', 'phone_type_mismatch'],
      password: ['required', 'string_type_mismatch', 'length_out_of_minimum']
    })
  })

  it('Should return undefined when the input is valid', () => {
    const schema = Assert.strict({
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
    const schema = Assert.strict({
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
    const schema = Assert.strict({
      email: Assert.optional().string().email(),
      phone: Assert.optional().string().phone(),
      password: Assert.optional().string().lengthMinimum(8)
    })

    expect(schema.validate({})).toBeUndefined()
  })

  it('Should return violations when the input is empty and at least one assertion is required', () => {
    const schema = Assert.strict({
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
