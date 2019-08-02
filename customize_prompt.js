module.exports = [
  {
    name: 'outputName',
    message: '导出包的名称',
    default: 'name'
  },
  {
    type: "confirm",
    name: "uglify",
    message: "是否开启uglify压缩代码（注意如果引入包是commonJs会出错）"
  },
  {
    type: "checkbox",
    name: "format",
    message: "选择要输出包的规范",
    choices: [
      {
        name: 'es',
        message: 'ES6 Module 模块文件',
        checked: true
      }, {
        name: 'cjs',
        message: 'CommonJS，适用于 Node 和 Browserify/Webpack',
        checked: true
      }, {
        name: 'amd',
        message: 'AMD 异步模块定义，用于像RequireJS这样的模块加载器',
      }, {
        name: 'umd',
        message: '通用模块定义，以amd，cjs 和 iife 为一体',
      },
    ]
  }
]