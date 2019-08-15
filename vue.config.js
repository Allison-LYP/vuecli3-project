module.exports = {
    // 基本路径
    publicPath:"./",
    outputDir:"dist",
    assetsDir: '',
    devServer: {
        proxy: 'http://localhost:8080'
    }
}
