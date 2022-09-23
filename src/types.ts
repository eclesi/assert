import { Assert } from './assert'
import { AssertSchema } from './assertSchema'

export type Violations = string[]

export type Options = {
  flat: boolean
}

export type AnyInput = {
  [key: string]: unknown
}

export type AssertOptions = {
  message: string | ((value: unknown) => string)
  abortEarly?: boolean
}

export type AnySchema = {
  [key: string]: Assert | AssertSchema
}

export type SchemaViolation = {
  [key: string]: Violations | SchemaViolation
}
