const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    disableStaticImages: true,
  },
})

module.exports = withNextra()
