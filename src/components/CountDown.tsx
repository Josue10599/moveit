import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {
    let initialTime = 25 * 60;
    const [time, setTime] = useState(initialTime);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setActive(!active);
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => { setTime(time - 1); }, 1000)
        }
    }, [active, time])

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
            <button
                type="button"
                className={styles.countDownButton}
                onClick={startCountDown}>
                Iniciar ciclo
            </button>
        </div>
    );
}