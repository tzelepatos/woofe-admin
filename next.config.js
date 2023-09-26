/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.facebook.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;
