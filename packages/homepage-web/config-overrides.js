const { override, addLessLoader, adjustStyleLoaders, overrideDevServer } = require("customize-cra");

const webpackConfig = () => config => {
  return {
    ...config,
    output: {
      libraryTarget: 'umd',
      // 修改不规范的代码格式，避免逃逸沙箱
      globalObject: 'window',
      // 请求确保每个子应用该值都不相同，否则可能出现 webpack chunk 互相影响的可能
      // webpack 5 使用 chunkLoadingGlobal 代替，若不填 webpack 5 将会直接使用 package.json name 作为唯一值，请确保应用间的 name 各不相同
      // jsonpFunction: 'test-app-jsonpFunction',
      // 保证子应用的资源路径变为绝对路径，避免子应用的相对资源在变为主应用上的相对资源，因为子应用和主应用在同一个文档流，相对路径是相对于主应用而言的
      publicPath: 'http://localhost:3000',
    }
  }
}

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
    }),

    webpackConfig()

  ),

  devServer: overrideDevServer(
    devServerConfig()
  )
}