const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./index.ts'],
    outfile: './dist/index.js',
    platform: 'neutral',
    format: 'esm',
  })
  .catch(() => process.exit(1));
