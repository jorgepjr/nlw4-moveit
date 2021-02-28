import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { Challengebox } from '../components/Challengebox'

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

export default function Home(props) {
  console.log(props)
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesConpleted={props.challengesConpleted}
    >
      <CountdownProvider>
        <div className={styles.container}>
          <Head>
            <link rel="shortcut icon" href="favicon.png" type="image/png" />
            <title>Inicio - Moveit</title>
          </Head>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div><Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div><Challengebox /></div>
            </section>
          </CountdownProvider>
        </div>
      </CountdownProvider>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const {
    level,
    currentExperience,
    challengesConpleted
  } = context.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesConpleted: Number(challengesConpleted)
    }
  }
}
