const withPWA = require("next-pwa");


module.exports = withPWA({
    pwa: {
        dest: "public",
        disable: process.env.NODE_ENV === "development",
    },
    optimizeFonts: true,
    reactStrictMode: true,
    images: {
        domains: ["*.*.*", "humble-titan-strapi.herokuapp.com", "h-t-strapi.s3.amazonaws.com"],
        formats: ["image/avif", "image/webp"],
    },
    trailingSlash: true,
});