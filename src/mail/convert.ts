import { readFileSync } from 'fs';
import { resolve } from 'path';
import { compile } from 'handlebars';

export function convertHandlebars(path: string) {
  const handleBarFile = readFileSync(resolve(__dirname, path), 'utf-8');
  const readyTemplate = compile(handleBarFile);
  return readyTemplate;
}
