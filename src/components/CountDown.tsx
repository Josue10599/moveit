import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../context/ChallengedContext';
import styles from '../styles/components/CountDown.module.css';

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
    const initialTime = 0.1 * 60;
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const { startNewChallenge } = useContext(ChallengeContext);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function stopCountDown() {
        setIsActive(false);
        clearTimeout(countDownTimeout)
        setTime(initialTime);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => { setTime(time - 1); }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>
                        {minuteLeft}
                    </span>
                    <span>
                        {minuteRight}
                    </span>
                </div>
                <span>
                    :
                </span>
                <div>
                    <span>
                        {secondLeft}
                    </span>
                    <span>
                        {secondRight}
                    </span>
                </div>
            </div>
            {hasFinished ? (
                <button
                    disabled
                    className={styles.countDownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                            onClick={stopCountDown}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countDownButton}
                            onClick={startCountDown}>
                            Iniciar ciclo
                        </button>
                    )
                    }
                </>
            )}
        </div>
    );
}