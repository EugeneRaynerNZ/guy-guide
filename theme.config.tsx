import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
// import Image from 'next/image'
import { MdAccessibility } from "react-icons/md";
import { AiFillHome, AiTwotoneHeart } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";
import { FaBook, FaHeadSideVirus } from "react-icons/fa";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Guy Guide" />
      <meta property="og:description" content="The place for young men to learn about their bodies" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
    </>
  ),
  logo: <span className="textLogo">Guy Guide</span>,
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: <span>
      {new Date().getFullYear()} © <a href="https://guy.guide" target="_blank">Guy Guide</a>.
    </span>,
  },
  // Collapses all level 1 sidebar, add icons to titles
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title }) {
      if (title === 'Home') {
        return <div className="listItemContainer"><AiFillHome /> {title}</div>
      }
      if (title === 'Guide') {
        return <div className="listItemContainer"><FaBook /> {title}</div>
      }
      if (title === 'Testosterone') {
        return <div className="listItemContainer"><MdAccessibility /> {title}</div>
      }
      if (title === 'Diet') {
        return <div className="listItemContainer"><AiTwotoneHeart /> {title}</div>
      }
      if (title === 'Exercise') {
        return <div className="listItemContainer"><GiConverseShoe /> {title}</div>
      }
      if (title === 'Mental Health') {
        return <div className="listItemContainer"><FaHeadSideVirus /> {title}</div>
      }
      return <>{title}</>
    }
  },
  // add navigation from bottom of page
  navigation: true,
  // SEO
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Guy Guide'
      }
    }
  }
  
}

export default config