const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./index.ts'],
    bundle: true,
    outfile: './dist/index.js',
    platform: 'neutral',
    format: 'esm',
    target: 'es2017',
  })
  .catch(() => process.exit(1));
