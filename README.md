# 61-rollupt-template
## 安装
```
npm run install
```
## 打包
```
npm run build
```

## 输出模块选择
-  es – 将软件包保存为ES模块文件
- cjs – CommonJS，适用于 Node 和 Browserify/Webpack
- amd 异步模块定义，用于像RequireJS这样的模块加载器
- umd – 通用模块定义，以amd，cjs 和 iife 为一体

## 默认插件
- rollup-plugin-node-resolve  插件可以告诉 Rollup 如何查找外部模块。 安装它
- rollup-plugin-commonjs 们需要将CommonJS模块转换为 ES2015 供 Rollup 处理
- rollup-plugin-babel 使用babel编译
- rollup-plugin-uglify 压缩代码 