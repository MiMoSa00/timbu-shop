import React from 'react'



const setupProxy = () => {

    const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/products',
    createProxyMiddleware({
      target: 'https://api.timbu.cloud',
      changeOrigin: true,
    })
  );
};
  return (
    <div>setupProxy</div>
  )
}

export default setupProxy
