import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengedContext';
import { CountDownContext } from '../context/CountDownContext';
import styles from '../styles/components/ChallengedBox.module.css';

export function ChallengedBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
    const { resetCountDown } = useContext(CountDownContext);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>
                            Novo desafio
                        </strong>
                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}>
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuccededButton}
                            onClick={handleChallengeSucceded}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo para receber um desafio
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    );
}