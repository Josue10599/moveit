import styles from '../styles/components/CompleteChallenge.module.css';

export function CompletedChallenge() {
    return (
        <div className={styles.completeChallengeContainer}>
            <span>Desafio completos</span>
            <span>5</span>
        </div>
    );
}