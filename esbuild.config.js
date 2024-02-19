const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./index.ts'],
    bundle: true,
    outdir: 'dist',
    platform: 'browser',
    format: 'esm',
    sourcemap: true,
    target: 'es2017',
    jsx: 'react',
  })
  .catch(() => process.exit(1));
