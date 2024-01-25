import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const logo = 'logo.jpg'

const config: DocsThemeConfig = {
  logo: 
    <span>
      <img src={logo} alt="npc.institute" width="110px" />
    </span>,
  project: {
    link: 'https://github.com/new-players',
  },
  /*
  chat: {
    link: 'https://discord.com',
  },
  */
  docsRepositoryBase: 'https://github.com/new-players/docs.npc.institute',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },  
  footer: {
    text: 'MIT 2024 © New Players Cooperative',
  },
}

export default config
