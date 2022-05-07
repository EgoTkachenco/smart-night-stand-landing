/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
console.log('DEBUG: ', debug)
const nextConfig = {
  env: {
    BACKEND_URL: !debug
      ? 'https://egotkachenco.github.io/smart-night-stand-landing'
      : '',
  },
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
