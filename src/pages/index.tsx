import React from 'react'
import Head from 'next/head'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from '../components/CompletedChallenges'
import Countdown from '../components/CountDown'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png"/>
        <title>Inicio - Moveit</title>
      </Head>
      <ExperienceBar />

      <section>
        <div><Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
