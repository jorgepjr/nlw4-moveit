import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'
import { CountdownContext } from '../contexts/CountdownContext'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.btnCountdown}>Ciclo encerrado
                </button>
            ) : (
                    <>

                        {
                            isActive ? (
                                <button
                                    onClick={resetCountdown}
                                    type="button"
                                    className={`${styles.btnCountdown} ${styles.btnCountdownActive}`}>Abandonar ciclo
                                </button>
                            ) :
                                <button
                                    onClick={startCountdown}
                                    type="button"
                                    className={styles.btnCountdown}>Iniciar ciclo
                                </button>
                        }
                    </>
                )}

        </div>
    )
}