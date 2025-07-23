import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };

export default [
  // CommonJS build
  {
    input: 'src/postgresql.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false
      })
    ],
    external: [...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})]
  },
  // ES module build
  {
    input: 'src/postgresql.ts',
    output: {
      file: pkg.module,
      format: 'esm'
    },
    plugins: [
      typescript({
        declaration: false,
        declarationMap: false
      })
    ],
    external: [...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})]
  }
];
