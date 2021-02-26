import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengedContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/josue10599.png" alt="Josue Lopes" />
            <div>
                <strong>
                    Josue Lopes
                </strong>
                <p>
                    <img src='icons/level.svg' alt="Lvel" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}