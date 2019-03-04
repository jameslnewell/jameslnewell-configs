module.exports = {
  "extends": ["tslint:recommended", "tslint-config-prettier"],
  "rules": {
    "interface-name": false,
    "quotemark": [false],
    
    // stupid
    "member-ordering": false,
    "object-literal-sort-keys": [false],
    "ordered-imports": [false],

    // nitpicky
    "comment-format": false,

    // disable .only() in tests
    "ban": [
      true,
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
