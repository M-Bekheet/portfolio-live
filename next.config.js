/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "images.ctfassets.net" },
    ],
    minimumCacheTTL: 36000,
  },
};

module.exports = nextConfig;
