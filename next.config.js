const withPWA = require("next-pwa");


module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    CUSTOMKEY: "MY_VALUE",
    KEY: "AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY",
    SHEET_ID: "1ZNcwc9U6dYNzVOQmheECnnZDtH6zxdwbkT9Ns8iOX9k",
  },
  optimizeFonts: true,
  reactStrictMode: true,
  images: {
    domains: ["*.*.*", "localhost"],
    formats: ["image/avif", "image/webp"],
  },
});
