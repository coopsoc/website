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
    {
      source: "/calendar",
      destination: "webcal://calendar.google.com/calendar/ical/pnpcv7pttn3n36herr12kb0lm8%40group.calendar.google.com/public/basic.ics",
      permanent: false,
    },
    {
      source: "/first-year-fb-group",
      destination: "https://www.facebook.com/groups/883034036564419/",
      permanent: false,
    },
  ]
};

module.exports = nextConfig;
