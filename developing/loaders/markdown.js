const marked = require('marked')
const loaderUtils = require('loader-utils')

module.exports = function(markdown) {
  // 使用 loaderUtils 来获取 loader 的配置项
  // this 是构建运行时的一些上下文信息
  const options = loaderUtils.getOptions(this)

  this.cacheable()

  // 把配置项直接传递给 marked
  marked.setOptions(options)

  // 使用 marked 处理 markdown 字符串，然后返回
  const result = marked(markdown)
  return result
}
