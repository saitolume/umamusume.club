const withPlugins = require('next-compose-plugins')
const withPreact = require('next-plugin-preact');
const path = require('path')

const nextConfig = {
  env: {
    FIREBASE_CLIENT_CONFIG: process.env.FIREBASE_CLIENT_CONFIG
  },
  experimental: {
    modern: true,
  },
  webpack(config) {
    config.resolve.alias['~'] = path.resolve('src')
    return config
  }
}

module.exports = withPlugins([withPreact], nextConfig)
