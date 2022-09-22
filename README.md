# Eclesi Schema Assert

This library provide an easy and extensible api to create schema validator for input or single values.

```typescript
const schema = Assert.strict({
  name: Assert.required().string(),
  email: Assert.required().email(),
  password: Assert.required().string().lengthMinimum(8)
})

// For a valid input the schema validation will return undefined because no violations was found
schema.validate({
  name: 'Alef',
  email: 'any@email.com',
  password: 's3cr3tp4ssw0rd'
})

// For a invalid input the schema validation will return an object containing each violation for each property
schema.validate({})
/**
 * {
 *    schema: ['strict_type_mismatch'],
 *    name: ['required', 'string_type_mismatch'],
 *    email: ['required', 'email_type_mismatch'],
 *    password: ['required', 'string_type_mismatch', 'length_out_of_minimum']
 *  }
 */
```
