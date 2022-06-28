/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
console.log('DEBUG: ', debug)
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig
