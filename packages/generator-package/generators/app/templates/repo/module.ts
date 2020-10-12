import {TemplateModule} from '../../types';
import * as base from '../base/module';

export const name: TemplateModule['name'] = 'repo';

export const manifest: TemplateModule['manifest'] = (options) => {
  const manifest = base.manifest(options);
  return {
    ...manifest,
    files: [...(manifest.files || []), 'dist'],
    source: 'src/index.ts',
    main: 'dist/index.cjs.js',
    module: 'dist/index.esm.js',
    types: 'dist/index.d.ts',
    sideEffects: false,
    dependencies: {
      ...manifest.dependencies,
      '@babel/runtime': '7.11.2',
    },
    devDependencies: {
      ...manifest.devDependencies,
      '@jameslnewell/rollup-config': '^1.0.0',
      rollup: '^2.26.4',
    },
    scripts: {
      ...manifest.scripts,
      clean: 'rm -rf dist',
      build: 'rollup -c rollup.config.js',
      prepublishOnly:
        'yarn run clean && yarn run lint && yarn run type && yarn run build && yarn run test',
      // "postpublish": "yarn run deploy"
    },
  };
};

export const files: TemplateModule['files'] = (options, generator) => {
  base.files(options, generator);
  // generator.fs.copy(generator.templatePath(`${name}/files/.*`), generator.destinationPath());
  generator.fs.copy(
    generator.templatePath(`${name}/files/*.*`),
    generator.destinationPath(),
  );
};
