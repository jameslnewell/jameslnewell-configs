/* eslint-env node */
const {promisify} = require('util');
const readPkgUp = require('read-pkg-up');
const resolve = require('resolve');
const resolvePlugin = require('@rollup/plugin-node-resolve').default;
const commonjsPlugin = require('@rollup/plugin-commonjs');
const typescriptPlugin = require('@wessberg/rollup-plugin-ts');

const resolvePromise = promisify(resolve);

module.exports = async () => {

  // read the package.json
  const {pkg} = await readPkgUp();
  if (!pkg) {
    throw new Error('package.json not found');
  }

  const output = {
    dir: 'dist',
    entryFileNames: '[name].[format].js',
    chunkFileNames: '[name]-[hash].[format].js',
  };
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
   // TODO: check sub-path of dep
  const external = id => [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})].includes(id);
  const plugins = [
    resolvePlugin(), 
    commonjsPlugin(),
    typescriptPlugin({
      transpileOnly: true,
      transpiler: 'babel',
      tsconfig: config => ({
        ...config, 
        incremental: true,
        declaration: true,
        target: 'ESNext',
        module: 'ESNext'
      }),
      babelConfig: {
        plugins: [require.resolve('@babel/plugin-transform-runtime')]
      }
    })
  ];

  return [
    {
      external,
      input: await resolvePromise('./src/index', {extensions, basedir: process.cwd()}),
      output: [
        {
          ...output,
          format: 'esm'
        },
        {
          ...output,
          format: 'cjs'
        }
      ],
      plugins
    },
  ]
};
