const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./index.ts'],
    bundle: true,
    outfile: './dist/index.js',
    platform: 'browser',
    format: 'esm',
    sourcemap: true,
    target: 'es2017',
  })
  .catch(() => process.exit(1));
