const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./index.ts', './index.d.ts'], // O ponto de entrada da sua biblioteca TypeScript
    bundle: true, // Indica que você deseja criar um único arquivo de saída
    outfile: './dist/index.js', // O caminho para o arquivo de saída
    platform: 'node', // Plataforma de destino (node, browser, etc.)
    format: 'esm', // Formato de saída (CommonJS, ESM, etc.)
    sourcemap: true, // Gera sourcemaps para facilitar a depuração
    target: ['node16'], // Versão do Node.js de destino
  })
  .catch(() => process.exit(1));
