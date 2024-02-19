const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./index.ts'],
    outfile: './dist/index.js',
    platform: 'neutral',
    format: 'cjs',
  })
  .catch(() => process.exit(1));
