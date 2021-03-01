const withPlugins = require('next-compose-plugins')
const withPreact = require('next-plugin-preact');
const path = require('path')

const nextConfig = {
  future: {
    webpack5: true
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
