import { InitialOptionsTsJest } from 'ts-jest'

const jestConfig: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  maxWorkers: 1
}

export default jestConfig
