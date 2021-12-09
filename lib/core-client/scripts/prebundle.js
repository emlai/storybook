const { resolve } = require('path');
const rollup = require('rollup');

const rollupTypescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');

const previewInputOptions = {
  input: resolve(__dirname, '../src/index.ts'), // conditionally required
  plugins: [nodeResolve(), commonjs(), json(), rollupTypescript()],
  external: ['@storybook/addons'],
};

const previewOutputOptions = {
  dir: resolve(__dirname, '../bundle/preview'),

  format: 'es', // required
};

// see below for details on the options

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(previewInputOptions);

  await bundle.generate(previewOutputOptions);

  // or write the bundle to disk
  await bundle.write(previewOutputOptions);

  // closes the bundle
  await bundle.close();
}

build();