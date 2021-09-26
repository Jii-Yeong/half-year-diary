const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/hyd/api", {
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};
