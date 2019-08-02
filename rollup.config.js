/**
 * @author lien
 * @create 2019.07.25
 * @description rollup 配置文件
 */
import { comment } from './utils/comment-helper-es'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
const name = 'name'
export default {
  input: 'src/main.js',
  output: [
    <% if (format.includes('umd')) { %>
    // umd – 通用模块定义，以amd，cjs 和 iife 为一体
    {
      name: name,
      file: `dist/${name}.umd.js`,
      format: 'umd',
      banner: comment('welcome to use rollup-template'),
      footer: comment('powered by 61', 'copyright 2019')
    },
    <% } %>
    <% if (format.includes('es')) { %>
    // es – 将软件包保存为ES模块文件
    { 
      name: name,
      file: `dist/${name}.es.js`,
      format: 'es',
      banner: comment('welcome to use rollup-template'),
      footer: comment('powered by 61', 'copyright 2019') 
    },
    <% } %>
    <% if (format.includes('cjs')) { %>
    // cjs – CommonJS，适用于 Node 和 Browserify/Webpack
    {
      name: name,
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
      banner: comment('welcome to use rollup-template'),
      footer: comment('powered by 61', 'copyright 2019')
    },
    <% } %>
    <% if (format.includes('amd')) { %>
    // 异步模块定义，用于像RequireJS这样的模块加载器
    {
      name: name,
      file: `dist/${name}.amd.js`,
      format: 'amd',
      banner: comment('welcome to use rollup-template'),
      footer: comment('powered by 61', 'copyright 2019')
    },
    <% } %>
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
  ]
} 