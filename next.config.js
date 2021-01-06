const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withOptimizedImages = require('next-optimized-images')
 
module.exports = withPlugins([
  [withOptimizedImages, {
    optimizeImagesInDev: true,
    responsive: {
      adapter: require('responsive-loader/sharp')
    }
  }],
  [withPWA, {
    pwa: {
      dest: 'public'
    }
  }]
])
