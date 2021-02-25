import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/josue10599.png" alt="Josue Lopes" />
            <div>
                <strong>
                    Josue Lopes
                </strong>
                <p>
                    <img src='icons/level.svg' alt="Lvel" />
                    Level 1
                </p>
            </div>
        </div>
    );
}