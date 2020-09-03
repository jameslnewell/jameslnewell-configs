import { TemplateOptions, TemplateModule } from "./types";

import path from 'path';
import Generator from 'yeoman-generator';
import * as single from './templates/repo/module';
import * as monorepo from './templates/monorepo/module';

const sortObjectByKeys = (object: Record<string, unknown>): Record<string, unknown> | undefined => {
  if (!object) return undefined;
  return Object.keys(object).sort().reduce((m, key) => ({...m, [key]: object[key]}), {});
} 

export default class extends Generator {

  private templateOptions: TemplateOptions | undefined = undefined;
  private templateModule: TemplateModule | undefined = undefined;

  async prompting(): Promise<void> {
    this.argument('dir', {
      type: String,
      required: false,
      default: path.resolve('.')
    });

    this.option('react', {
      type: Boolean,
      default: false,
    });

    this.option('monorepo', {
      type: Boolean,
      default: false,
    });

    const answers = await this.prompt([ 
      {
        type: 'input',
        name: 'name',
        message: 'What is the package name?',
        store: true,
        default: path.basename(this.options.dir),
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the package description?',
        store: true,
        default: '',
      },
    ]);

    this.templateOptions = {
      feature: {
        react: this.options.react,
        monorepo: this.options.monorepo
      },
      metadata: {
        name: answers.name,
        description: answers.description,
      }
    };

    this.templateModule = this.options.monorepo ? monorepo : single;

    this.destinationRoot(path.resolve(this.options.dir));
  }

  async writingManifest(): Promise<void> {
    if (!this.templateOptions || !this.templateModule) return;
    const manifest = await this.templateModule.manifest(this.templateOptions);
    this.fs.writeJSON(
      this.destinationPath('package.json'),
      {
        ...manifest,
        dependencies: sortObjectByKeys(manifest.dependencies),
        peerDependencies: sortObjectByKeys(manifest.peerDependencies),
        devDependencies: sortObjectByKeys(manifest.devDependencies),
      }
    );
  }

  async writingFiles(): Promise<void> {
    if (!this.templateOptions || !this.templateModule) return;
    await this.templateModule.files(this.templateOptions, this);
  }

  async installing(): Promise<void> {
    this.spawnCommand('git', ['init', '--quiet']);
    this.yarnInstall();
  }

};
