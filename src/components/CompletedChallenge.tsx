import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengedContext';
import styles from '../styles/components/CompleteChallenge.module.css';

export function CompletedChallenge() {
    const {challengesCompleted} = useContext(ChallengeContext);

    return (
        <div className={styles.completeChallengeContainer}>
            <span>Desafio completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}