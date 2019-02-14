const fs = require('fs');
const path = require('path');

const sourcePath = `${__dirname}/.editorconfig`;
const destinationPath = `${process.cwd()}/.editorconfig`;

if (!fs.existsSync(destinationPath)) {
  fs.writeFileSync(destinationPath, fs.readFileSync(sourcePath));
  console.log('@jameslnewell/editor-config: A .editorconfig file was created. ');
} else {
  const sourceContent = fs.readFileSync(sourcePath).toString();
  const destinationContent = fs.readFileSync(destinationPath).toString();
  if (destinationContent !== sourceContent) {
    console.log('@jameslnewell/editor-config: Your .editorconfig file has diverged. ');
  }
}
