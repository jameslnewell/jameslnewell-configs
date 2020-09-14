import { TemplateModule as base } from "../../types";

export const name: base['name'] = 'base';

export const manifest: base['manifest'] = (options) => {
  return {
    ...options.metadata,
    version: '1.0.0',
    devDependencies: {
      '@babel/core': '^7.11.1',
      '@jameslnewell/babel-preset': '^2.1.0',
      '@jameslnewell/editor-config': '^1.0.1',
      '@jameslnewell/eslint-config': '^0.15.0',
      '@jameslnewell/jest-preset': '^2.0.0',
      '@jameslnewell/prettier-config': '^1.0.1',
      '@jameslnewell/typescript-config': '^3.0.0',
      '@types/jest': '^26.0.12',
      'eslint': '^7.6.0',
      'husky': '^4.2.5',
      'jest': '^26.4.0',
      'prettier': '^2.0.5',
      'pretty-quick': '2.0.1',
      'typescript': '^4.0.2'
    },
    babel: {
      presets: ['@jameslnewell/babel-preset']
    },
    eslintConfig: {
      extends: options.feature.react ? '@jameslnewell/eslint-config/react' : '@jameslnewell/eslint-config',
    },
    jest: {
      preset: '@jameslnewell/jest-preset'
    },
    husky: {
      hooks: {
        'pre-commit': 'pretty-quick --staged'
      }
    },
    prettier: '@jameslnewell/prettier-config',
    scripts: {
      format: 'prettier --write .',
      lint: 'eslint --fix',
      type: 'tsc',
      test: 'jest'
    },
    license: 'MIT'
  };
};

export const files: base['files'] = (_, generator) => {
  generator.fs.copy(generator.templatePath(`${name}/files/.*`), generator.destinationPath());
  generator.fs.copy(generator.templatePath(`${name}/files/*.*`), generator.destinationPath());
}
