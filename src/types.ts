import { Assert } from './assert'

export type Violations = string[]

export type AnyInput = {
  [key: string]: unknown
}

export type AssertOptions = {
  message: string | ((value: unknown) => string)
  abortEarly?: boolean
}

export type AnySchema = {
  [key: string]: Assert | AnySchema
}

export type SchemaViolation = {
  [key: string]: Violations | SchemaViolation
}
