import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  // Collapses all level 1 sidebar, add icons to titles
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title }) {
      if (title === 'Testosterone') {
        return <>❓ {title}</>
      }
      return <>👉 {title}</>
    }
  },
  // add navigation from bottom of page
  navigation: true,
  // SEO
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SWR'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Insert Name Here" />
      <meta property="og:description" content="The place for young men to learn about their bodies" />
    </>
  ),
}

export default config