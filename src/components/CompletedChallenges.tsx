import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){

    const {challengesConpleted} = useContext(ChallengesContext)

    return(
        <div className={styles.container}>
            <span>Desafios Completos</span>
            <span>{challengesConpleted}</span>
        </div>
    )
}