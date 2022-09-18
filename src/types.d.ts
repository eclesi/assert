import { Assert } from ".";

export type Violations = string[];

export type AnyInput = {
  [key: string]: unknown;
};

export type AnySchema = {
  [key: string]: Assert | AnySchema;
};

export type SchemaViolation = {
  [key: string]: Violations | SchemaViolation;
};
