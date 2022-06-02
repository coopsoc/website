const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "",
  images: {
    loader: "akamai",
    path: "/"
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
