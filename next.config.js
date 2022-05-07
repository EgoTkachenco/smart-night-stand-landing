/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: !debug
    ? 'https://egotkachenco.github.io/smart-night-stand-landing/'
    : '',
}

module.exports = nextConfig
