/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "selzy.com",
        port: "",
        pathname: "/my-bucket/**",
      },
    ],
  },
};
