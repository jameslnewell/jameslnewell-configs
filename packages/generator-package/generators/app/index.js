require('ts-node').register({
  project: `${__dirname}/../../tsconfig.json`
});
module.exports = require('./generator');
