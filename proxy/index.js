const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../config');

const router = express.Router();

router.use(
    "", 
    createProxyMiddleware({
        target: `http://localhost:${config.frontend.port}`,
        changeOrigin: true
    })
)

module.exports = router;