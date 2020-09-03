import { TemplateModule } from "../../types";
import * as base from '../base/module';

export const name: TemplateModule['name'] = 'monorepo';

export const manifest: TemplateModule['manifest'] = (options) => {
  const manifest = base.manifest(options);
  return {
    ...manifest, 
  };
};

export const files: TemplateModule['files'] = (options, generator) => {
  base.files(options, generator);
}
