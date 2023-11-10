/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://localhost:27017/rogue-shop",
    DB_URI: "",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.roguefitness.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
