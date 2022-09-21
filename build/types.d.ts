import { Assert } from './assert';
export declare type Violations = string[];
export declare type AnyInput = {
    [key: string]: unknown;
};
export declare type AnySchema = {
    [key: string]: Assert | AnySchema;
};
export declare type SchemaViolation = {
    [key: string]: Violations | SchemaViolation;
};
//# sourceMappingURL=types.d.ts.map