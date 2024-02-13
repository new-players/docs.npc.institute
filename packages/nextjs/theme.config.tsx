import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { RainbowKitCustomConnectButton } from './components/RainbowKitCustomConnectButton'

const logo = 'logo.jpg'
const opg = 'opg.png'

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
    text: (
      <span>
        <p>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://opgames.org" target="_blank">
        <img src={opg} alt="npc.institute" width="110px" />
        </a>
        </p>
      </span>      
    )
  },
  search: false,
  darkMode: false,
  primaryHue: 25,
  primarySaturation: 100,
  navbar: {
    extraContent: (
      <RainbowKitCustomConnectButton />
    )
  }  
}

export default config
