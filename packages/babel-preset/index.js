module.exports = (api, opts = {}) => ({
  presets: [
    [
      require("@babel/preset-env"),
      {
        useBuiltIns: "usage",
        corejs: { version: 2 },
        modules: opts.modules || "auto"
      }
    ],
    require("@babel/preset-react"),
    require("@babel/preset-typescript")
  ],
  plugins: [
    require("@babel/plugin-proposal-class-properties"),
    require("@babel/plugin-proposal-object-rest-spread")
  ]
});
