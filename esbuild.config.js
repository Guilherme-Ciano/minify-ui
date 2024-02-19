const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/index.ts'], // O ponto de entrada da sua biblioteca TypeScript
    bundle: true, // Indica que você deseja criar um único arquivo de saída
    outfile: './dist/bundle.js', // O caminho para o arquivo de saída
    platform: 'node', // Plataforma de destino (node, browser, etc.)
    format: 'cjs', // Formato de saída (CommonJS, ESM, etc.)
    sourcemap: true, // Gera sourcemaps para facilitar a depuração
    target: ['node16'], // Versão do Node.js de destino
  })
  .catch(() => process.exit(1));
