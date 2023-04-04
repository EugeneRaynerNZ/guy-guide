const withNextra = require('nextra')({
  images: {
    unoptimized: true,
  },
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()
