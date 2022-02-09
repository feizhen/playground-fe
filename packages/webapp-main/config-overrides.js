const { override, addLessLoader, adjustStyleLoaders, overrideDevServer } = require("customize-cra");



const devServerConfig = () => config => {
  return {
      ...config,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
  }
}

module.exports = {
  webpack: override(
    /**
      支持 less
     */
    addLessLoader(),

    /**
      cra升级之后默认使用webpack5，加载postcss-loader会有问题，需要adjustStyleLoader去overwrite
      详见：https://github.com/arackaf/customize-cra/issues/315#issuecomment-1017081592
     */
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    })

  ),

  devServer: overrideDevServer(
    devServerConfig()
  )
}