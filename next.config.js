require("dotenv").config();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  env: {
    GRAPHCMS_PROJECT_API:
      process.env.GRAPHCMS_PROJECT_API,
  },
   reactStrictMode: true,
   images: {
    domains: ['ap-southeast-2.graphassets.com'],
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  })
