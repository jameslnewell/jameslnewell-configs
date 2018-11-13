# @jameslnewell/typescript-config

Typescript configuration.

## Installation

```
yarn add --dev @jameslnewell/typescript-config
```

## Usage

`tsconfig.json`

```json
{
  "extends": "./node_modules/@jameslnewell/typescript-config/tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "outDir": "dist"
  },
  "include": [
    "src/**/*.ts", "src/**/*.ts",
    "src/**/*.test.ts", "src/**/*.test.tsx",
    "test/**/*.test.ts", "test/**/*.test.tsx"
  ]
}
```