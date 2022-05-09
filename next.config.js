/** @type { import("next").NextConfig } */
module.exports = require("next-plugin-preact")({
  images: { formats: ["image/avif", "image/webp"] },
  reactStrictMode: true,
  pageExtensions: ["tsx"],
  swcMinify: true,
});
