const prod = process.env.NODE_ENV === 'production'
console.log('PRODUCTION', process.env.NODE_ENV)
module.exports = {
  'process.env.BACKEND_URL': prod ? '/smart-night-stand-landing' : '',
}
