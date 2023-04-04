const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    loader: 'akamai',
    path: '/',
  },
})

module.exports = withNextra()
