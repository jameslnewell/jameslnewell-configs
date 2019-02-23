module.exports = {
  "extends": ["tslint:recommended", "tslint-config-prettier"],
  "rules": {
    "interface-name": false,
    "ordered-imports": [false],
    "object-literal-sort-keys": [false],
    "quotemark": [false],

    "ban": [
      true,

      // disable .only() in tests
      { "name": ["fdescribe"], "message": "Don't focus tests!" },
      { "name": ["describe", "only"], "message": "Don't focus tests!" },
      { "name": ["describe", "skip"], "message": "Don't focus tests!" },
      { "name": ["fit"], "message": "Don't focus tests!" },
      { "name": ["it", "only"], "message": "Don't focus tests!" },
      { "name": ["test", "only"], "message": "Don't focus tests!" },
      { "name": ["it", "skip"], "message": "Don't focus tests!" }
    ]

  }
};
