const proxy = [
    {
        context: '/',
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '/v1' }
    }
];
module.exports = proxy;