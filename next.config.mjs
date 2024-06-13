/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
// const withVideos = require("next-videos");
// module.exports = withVideos();
export default nextConfig;
