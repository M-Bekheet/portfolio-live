/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "images.ctfassets.net" },
    ],
  },
};

module.exports = nextConfig;
