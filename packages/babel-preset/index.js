module.exports = (api, opts = {}) => ({
  presets: [
    [
      require('@babel/preset-env'),
      // {
      //   "modules": false,
      //   "spec": true,
      //   "forceAllTransforms": true,
      //   "useBuiltIns": "usage",
      //   "corejs": 3
      // },
    ],
    require('@babel/preset-react'),
    require('@babel/preset-typescript'),
  ],
  plugins: [
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-proposal-object-rest-spread'),
  ],
});
