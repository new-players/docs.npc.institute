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
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, justifyContent: "center", marginTop: 10 }}>
        <span className={`${myFont.className} ${styles.logotext2}`} >
          by
        </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, justifyContent: "center"}}>

        <span>
            <img src={opg} alt="npc.institute" width="80px" />
        </span>          
      </div>



    </div>
  ),
  head: (
    <>
    <meta property="og:title" content="npc.institute" />
    <meta property="og:description" content=" Imagine and build never-before-seen
game genres together with our new NPC friends 😃🤝🤖" />
    <meta property="og:image" content="https://npc.institute/graph.png" />
    </>
  ),
  chat: {
    link: 'https://discord.gg/vcymrnvSC9'
  },

  docsRepositoryBase: 'https://github.com/new-players/docs.npc.institute/tree/main/packages/nextjs',
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
    text: 
    (
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
      <>
      {/* <RainbowKitCustomConnectButton /> */}
      </>
    )
  }  
}

export default config


/*
  project: {
    link: 'https://github.com/new-players',
  },
  chat: {
    link: 'https://join.slack.com/t/newplayerscooperative/shared_invite/zt-2dcakmn2r-mCT19iMCin3w0R~M5qGv6Q',
    icon: (
      <svg width="24" height="24" viewBox="0 0 60 60">
        <g fill="currentColor">
          <path d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"/>
          <path d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"/>
          <path d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"/>
          <path d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"/>
        </g>
     </svg>
    )
  },  
*/
