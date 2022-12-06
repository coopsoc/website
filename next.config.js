const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "",
  basePath: "",
  images: {
    loader: "akamai",
    path: "/"
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  future: { 
    webpack5: true 
  },
};

module.exports = nextConfig;
