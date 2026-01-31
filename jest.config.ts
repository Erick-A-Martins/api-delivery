import type {Config} from 'jest';

const config: Config = {
  
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  moduleNameMapper: {
    "^@/(.*)\\.js$": "<rootDir>/src/$1.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
