const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  images: {
    loader: "akamai",
    path: "/",
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  redirects: async () => [
    // {
    //   source: "/calendar",
    //   destination: "", // TODO
    //   permanent: false,
    // },
    {
      source: "/first-year-fb-group",
      destination: "https://www.facebook.com/groups/883034036564419/",
      permanent: false,
    },
  ]
};

module.exports = nextConfig;
