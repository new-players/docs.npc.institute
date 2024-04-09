import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { state } from './store'
import Link from 'next/link'
import styles from '../../pages/index.module.css'

export function Overlay() {
  const snap = useSnapshot(state)
  const transition = { type: 'spring', duration: 0.8 }
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  }
  return (
    <div className="overlay" style={{ position: 'absolute', top: 100, left: 0, width: '100%', height: '100%' }}>
      <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
        <motion.div animate={{ x: snap.intro ? 0 : 100, opacity: snap.intro ? 1 : 0 }} transition={transition}>
        </motion.div>
      </motion.header>
      <AnimatePresence>
        {snap.intro ? (
          <motion.section key="main" {...config}>
            <div className="section--container">
              <motion.div
                key="title"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', damping: 5, stiffness: 40, restDelta: 0.001, duration: 0.3 }}>
                <h1>Reimagine NPCs</h1>
              </motion.div>
              <div className="support--content">
                <motion.div
                  key="p"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    damping: 7,
                    stiffness: 30,
                    restDelta: 0.001,
                    duration: 0.6,
                    delay: 0.2,
                    delayChildren: 0.2
                  }}>
                <div className="home-content">
                <div className="content-container">
                    <p className="subtitle">
                      Welcome to the NPC Institute. Imagine and build never-before-seen
                      <br className='sm:block hidden'/>
                      game genres together with our new NPC friends!</p>
                    <p className="subtitle">
                    <Link className={styles.cta} href="/gamedevjs">Get started →</Link>
                    </p>
                </div>
                </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.section key="custom" {...config}>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}
