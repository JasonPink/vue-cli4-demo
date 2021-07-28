module.exports = {
  devServer: {
    open: true,
    port: 9527
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/styles/var.scss";
        `
      }
    }
  }
}
