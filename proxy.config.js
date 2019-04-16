const proxy = [
    {
        context: '/api',
        target: 'http://localhost:3000/v1',
        pathRewrite: { '^/api': '/' }
    }
];
module.exports = proxy;