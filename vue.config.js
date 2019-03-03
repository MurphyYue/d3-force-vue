module.exports = {
    devServer: {
        host: 'localhost',
        progress: true,
        port: 8080,
        inline: true,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                secure: false,
                changeOrigin: true
            }
        }
    }
}