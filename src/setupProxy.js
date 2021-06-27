const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/code-challenge/api/categories',
        createProxyMiddleware({
            target: 'https://api.dev.cloud.barbooksaustralia.com/',
            changeOrigin: true,
        })
    );

    app.use(
        '/code-challenge/api/filter',
        createProxyMiddleware({
            target: 'https://api.dev.cloud.barbooksaustralia.com/',
            changeOrigin: true,
        })
    );
};