import tsConfigPaths from "rollup-plugin-tsconfig-paths"
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild'
import swc from '@rollup/plugin-swc';

export default {
  input: 'src/public/index.ts',
  output: {
    dir: 'output',
    format: 'es'
  },
  plugins: [
    tsConfigPaths({
      tsConfigPath: './tsconfig.json'
    }),
    nodeResolve({ extensions: [".tsx", ".ts", ".jsx", ".js", ".json"] }),
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      sourceMap: true, // default
      minify: process.env.NODE_ENV === 'production',
      // target: 'default', // default, or 'es20XX', 'esnext'
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"x.y.z"',
      },
      tsconfig: 'tsconfig.json', // default
      // Add extra loaders
      loaders: {
        // Add .json files support
        // require @rollup/plugin-commonjs
        '.json': 'json',
      },
    }),
    // swc(),
  ],
}