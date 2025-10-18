/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      // You can add other domains here as well
      {
        protocol: 'https',
        hostname: 'robohash.org', // You will need this one too!
        port: '',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig;