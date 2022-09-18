import { InitialOptionsTsJest, pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const jestConfig: InitialOptionsTsJest = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  maxWorkers: 1,
};

export default jestConfig;
