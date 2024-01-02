import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const logo = 'logo.jpg'

const config: DocsThemeConfig = {
  logo: 
    <span>
      <img src={logo} alt="New Players Cooperative" width="50px" height="50px" />
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
  footer: {
    text: 'MIT 2024 © New Players Cooperative',
  },
}

export default config
