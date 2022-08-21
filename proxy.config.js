const proxy = [
    {
        context: '/api',
        target: 'https://2e2a-177-131-189-143.sa.ngrok.io',
        pathRewrite: { '^/api': '' }
    }
];
module.exports = proxy;