import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengedContext';
import datas from '../../datas.json';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src={`https://github.com/${datas.usename_github}.png`} alt={datas.name} />
            <div>
                <strong>
                    {datas.name}
                </strong>
                <p>
                    <img src='icons/level.svg' alt="Lvel" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}