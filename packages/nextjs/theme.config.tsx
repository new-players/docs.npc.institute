import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { RainbowKitCustomConnectButton } from './components/RainbowKitCustomConnectButton'
import localFont from 'next/font/local'
import styles from './logo.module.css'

const logo = 'logo.svg'
const opg = 'opg.png'
const myFont = localFont({src: './fonts/RifficFree-Bold.ttf'})

const config: DocsThemeConfig = {
  logo: 
  (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <img src={logo} alt="npc.institute" width="40px" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 5 }}>
        <span className={`${myFont.className} ${styles.logotext}`} >
          NPC
        </span>
        <span className={`${myFont.className} ${styles.logotext2}`} >
          INSTITUTE
        </span>
      </div>
    </div>
  ),
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
