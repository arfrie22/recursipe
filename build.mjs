import * as esbuild from 'esbuild';
import postCssPlugin from '@deanc/esbuild-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

await esbuild.build({
  entryPoints: ['src/server/index.ts'],
  bundle: true,
  outfile: 'dist/index.cjs',
  platform: 'node',
  format: 'cjs',
});

await esbuild.build({
    entryPoints: [
        'src/public/index.html',
        'src/public/index.css',
        'src/public/index.ts',
    ],
    loader: {
        ".html": "copy",
    },
    plugins: [
        postCssPlugin({
          plugins: [autoprefixer, tailwindcss],
        }),
      ],
    bundle: true,
    outdir: 'dist/public',
    platform: 'browser',
  });