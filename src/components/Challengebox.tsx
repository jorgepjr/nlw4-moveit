import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Challengebox.module.css'

export function Challengebox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()

    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (<div className={styles.container}>
        {activeChallenge ? (
            <div className={styles.challengeActive}>
                <header>Ganhe {activeChallenge.amount} xp</header>

                <main>
                    <img src={`icons/${activeChallenge.type}.svg`} />
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>

                <footer>
                    <button
                        type="button"
                        className={styles.btnFailed}
                        onClick={handleChallengeFailed}
                    >Falhei</button>

                    <button
                        type="button"
                        className={styles.btnSucceed}
                        onClick={handleChallengeSucceeded}
                    >Completei</button>
                </footer>
            </div>
        ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber novos desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up" />
                    </p>
                </div>
            )}
    </div>)
}