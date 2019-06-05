# @jameslnewell/eslint-config

ESLint configuration.

## Installation

```
yarn add --dev @jameslnewell/eslint-config
```

## Usage

`.eslintrc.js`

```js
module.exports = {
  extends: '@jameslnewell/eslint-config',
  parserOptions: {
    project: './tsconfig.json',
  },
};
```
