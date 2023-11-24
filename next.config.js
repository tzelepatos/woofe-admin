/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.facebook.com",
      "platform-lookaside.fbsbx.com",
      "amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "woffe-upload.s3.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
