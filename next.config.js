/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bdesh.bdjobs.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
