/* eslint-disable @typescript-eslint/no-var-requires*/
const path = require('path');
const Generator = require('yeoman-generator');

function getName(dir) {
  return path.basename(dir);
}

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('dir', {
      type: String,
      required: false,
      default: process.cwd(),
    });
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the package name?',
        store: true,
        default: getName(this.options.dir),
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the package description?',
        store: true,
        default: '',
      },
    ]);
  }

  async writing() {
    const params = {
      name: this.answers.name,
      description: this.answers.description,
    };

    // copy templates
    this.fs.copyTpl(
      this.templatePath('**/*.*'),
      this.destinationPath(),
      params,
    );
    // this.fs.copy(this.templatePath('**/.*'), this.destinationPath(), params);

    // copy files
    this.fs.copy(this.templatePath('../files/**/*.*'), this.destinationPath());
    this.fs.copy(this.templatePath('../files/**/.*'), this.destinationPath());
  }

  /* @returns void */
  install() {
    this.yarnInstall();
  }
};
