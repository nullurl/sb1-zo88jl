/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['corepunk.com'],
    formats: ['image/avif', 'image/webp']
  },
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  swcMinify: false,
  experimental: {
    optimizeFonts: true,
    modern: true
  }
};

module.exports = nextConfig;