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
    "outDir": "lib",
    "target": "commonjs"

  },
  "include": ["src"]
}
```
