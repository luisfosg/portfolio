/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'res.cloudinary.com']
  },
  ...nextTranslate()
}
