const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/*", { target: "http://127.0.0.1:8081/", secure:false, headers: { "Connection": "keep-alive"} })
  );
  app.use(
    createProxyMiddleware("/api/productos/*", { target: "http://127.0.0.1:8081/",secure:false, headers: { "Connection": "keep-alive"} })
  );
  app.use(
    createProxyMiddleware("/api/order/*", { target: "http://127.0.0.1:8081/",secure:false, headers: { "Connection": "keep-alive"} })
  );
  app.use(
    createProxyMiddleware("/api/carrito/*", { target: "http://127.0.0.1:8081/",secure:false, headers: { "Connection": "keep-alive"} })
  );   
  app.use(
    createProxyMiddleware("/api/carrito/*/products", { target: "http://127.0.0.1:8081/",secure:false, headers: { "Connection": "keep-alive"} })
  );  
  app.use(
    createProxyMiddleware("/api/carrito/*/products/*", { target: "http://127.0.0.1:8081/",secure:false, headers: { "Connection": "keep-alive"} })
  );
};