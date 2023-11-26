/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'picsum.photos',
      port: '',
      // pathname: ''
    },
      // 'images.unsplash.com',
    ],
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
