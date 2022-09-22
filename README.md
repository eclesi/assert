# Eclesi Schema Assert

This library provide an easy and extensible api to create schema validator for input or single values.

```typescript
const schema = Assert.schemaStrict({
  name: Assert.required().string(),
  email: Assert.required().email(),
  password: Assert.required().string().lengthMinimum(8)
})

schema.validate({
  name: 'Alef',
  email: 'any@email.com',
  password: 's3cr3tp4ssw0rd'
})

/**
 * The output will be undefined because has no violations for this input
 * undefined
 */

schema.validate({
  name: 'Alef',
  email: 'any@email.com',
  password: 's3cr3tp4ssw0rd'
})

/**
 * The output will return all violations type for each property
 * {
 *    schema: ['strict_type_mismatch'],
 *    name: ['required', 'string_type_mismatch'],
 *    email: ['required', 'email_type_mismatch'],
 *    password: ['required', 'string_type_mismatch', 'length_out_of_minimum']
 *  }
 */
```
