/* eslint-disable @typescript-eslint/no-var-requires*/
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  /* @returns void */
  writing() {
    this.fs.copy(this.templatePath("**/*.*"), this.destinationPath());
    this.fs.copy(this.templatePath("**/.*"), this.destinationPath());
  }

  /* @returns void */
  install() {
    this.yarnInstall();
  }
};
