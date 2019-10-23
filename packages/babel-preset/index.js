module.exports = (api, opts = {}) => ({
  presets: [
    [
      require('@babel/preset-env'),
      {
        modules: opts.modules,
        targets: opts.targets,
      },
    ],
    require('@babel/preset-react'),
    require('@babel/preset-typescript'),
  ],
  plugins: [
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-proposal-object-rest-spread'),
  ],
  env: {
    test: {
      // make jest happy
      presets: [
        [
          require('@babel/preset-env'),
          {
            targets: {node: 'current'},
          },
        ],
      ],
    },
  },
});
