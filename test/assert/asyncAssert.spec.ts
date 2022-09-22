import { Assert } from '@/assert'
import { AssertChain } from '@/assertChain'
import { AssertOptions } from '@/types'

class EmailInUseAssert extends AssertChain {
  constructor(options: AssertOptions = { message: 'email_in_use' }) {
    super(options)
  }

  async isValid(value: unknown): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (value === 'email_in_use@email.com') {
          resolve(false)
        }

        resolve(true)
      }, 100)
    })
  }
}

describe('Email Assert', () => {
  const emailInUse = new EmailInUseAssert()

  it('Should return undefined when the email is not in use', async () => {
    const assert = Assert.required().email().assert(emailInUse)
    expect(await assert.validateAsync('email_not_in_use@email.com')).toBeUndefined()
  })

  it('Should return violations when the email is in use', async () => {
    const assert = Assert.required().email().assert(emailInUse)
    expect(await assert.validateAsync('email_in_use@email.com')).toStrictEqual(['email_in_use'])
  })

  it('Should not return violations when the email is optional', async () => {
    const assert = Assert.optional().email().assert(emailInUse)
    expect(await assert.validateAsync(undefined)).toBeUndefined()
  })
})
