# @jameslnewell/eslint-config

ESLint configuration.

## Installation

```
yarn add --dev @jameslnewell/eslint-config eslint
```

## Usage

Create a ESLint configuration file:

`.eslintrc.js`

```js
module.exports = {
  extends: "@jameslnewell/eslint-config",
  parserOptions: {
    project: "./tsconfig.json"
  }
};
```

Add a script to your `package.json`:

`package.json`

```json
{
  "scripts": {
    "lint": "eslint --ext .tsx,.ts,.jsx,.js ."
  }
}
```
