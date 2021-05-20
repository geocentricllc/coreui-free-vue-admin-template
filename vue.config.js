module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  disableHostCheck: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  }
}
