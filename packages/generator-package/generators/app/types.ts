import Generator from 'yeoman-generator';

export interface TemplateOptions {
  feature: {
    react: boolean;
    monorepo: boolean;
  };
  metadata: {
    name: string;
    description: string;
  };
}

export interface TemplateModule {
  name: string;
  manifest(options: TemplateOptions): {[name: string]: any};
  files(options: TemplateOptions, generator: Generator): void;
}
