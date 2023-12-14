const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 将请求代理到你的 Express 服务器地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 将请求的路径中的 '/api' 移除
        },
      },
    },
  },
})
