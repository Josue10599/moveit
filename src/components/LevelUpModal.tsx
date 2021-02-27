import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengedContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengeContext);

    return (
        <div className={styles.overlayLevelUp}>
            <div className={styles.containerLevelUp}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você subiu de level, continue avançando!</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar" />
                </button>
            </div>
        </div>
    );
}