const path = require('path')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://colgate.engedy.com/' : '/',
  lintOnSave: false,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Colgate | Mercaderistas | Colmaderos',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      // chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  css: {
    extract: {
      filename: 'css/build.css',
    }
  },
  configureWebpack: {

    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'src': path.resolve('src'),
        'assets': path.resolve('src/assets'),
        'components': path.resolve('src/components'),
        'services': path.resolve('src/services'),
        'directives': path.resolve('src/directives'),
        'vuestic-mixins': path.resolve('src/vuestic-theme/vuestic-mixins'),
        'vuestic-components': path.resolve('src/vuestic-theme/vuestic-components'),
        'vuestic-directives': path.resolve('src/vuestic-theme/vuestic-directives'),
        'vuestic-theme': path.resolve('src/vuestic-theme'),
        'data': path.resolve('src/data'),
        'vuex-store': path.resolve('src/store')
      }
    },
    optimization: {
      // to turn of code splitting:
      // see: https://webpack.js.org/configuration/optimization/#optimization-splitchunks
      splitChunks: false,
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.optimization.splitChunks(false)
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        data: `@import "@/sass/shared.scss";`
      }
    }
  }
}
