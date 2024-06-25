import swc from '@rollup/plugin-swc';

export default {
  input: 'src/public/index.ts',
  output: {
    dir: 'output',
    format: 'es'
  },
  plugins: [swc()]
};