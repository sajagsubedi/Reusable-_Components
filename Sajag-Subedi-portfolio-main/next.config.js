/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  env: {
NEXT_PUBLIC_KEY:process.env.NEXT_PUBLIC_KEY
  }
};

module.exports = nextConfig;
