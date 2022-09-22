import { AssertOptions, Violations } from './types'

export abstract class AssertChain {
  protected nextAssert?: AssertChain

  constructor(protected readonly options: AssertOptions) {}

  abstract isValid(value: unknown): Promise<boolean> | boolean

  validate(violations: Violations, value: unknown): Promise<Violations> | Violations {
    const isValid = this.isValid(value)

    if (isValid instanceof Promise) {
      return new Promise(async resolve => {
        if ((await this.isValid(value)) === false) {
          if (typeof this.options.message === 'string') {
            violations.push(this.options.message)
          } else {
            violations.push(this.options.message(value))
          }

          if (this.options?.abortEarly === true) {
            resolve(violations)
          }
        }

        resolve(await this.next(violations, value))
      })
    }

    if (this.isValid(value) === false) {
      if (typeof this.options.message === 'string') {
        violations.push(this.options.message)
      } else {
        violations.push(this.options.message(value))
      }

      if (this.options?.abortEarly === true) {
        return violations
      }
    }

    return this.next(violations, value)
  }

  addNext(assert: AssertChain): void {
    this.nextAssert = assert
  }

  next(violations: Violations, value: unknown): Promise<Violations> | Violations {
    if (this.nextAssert) {
      return this.nextAssert.validate(violations, value)
    }

    return violations
  }
}
