import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { MdAccessibility } from "react-icons/md";
import { AiFillHome, AiTwotoneHeart } from "react-icons/ai";
import { GiConverseShoe } from "react-icons/gi";
import { FaBook, FaHeadSideVirus } from "react-icons/fa";

const config: DocsThemeConfig = {
  logo: <Image src="/diet/vegetable-head.png" alt="Guys Guide" width={50} height={50} />,
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Guy Guide',
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
    return {
      titleTemplate: '%s – Guy Guide'
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