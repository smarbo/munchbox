/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "www.shareicon.net"],
  },
};

module.exports = nextConfig;
