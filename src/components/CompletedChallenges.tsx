import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    return(
        <div className={styles.container}>
            <span>Desafios Completos</span>
            <span>8</span>
        </div>
    )
}