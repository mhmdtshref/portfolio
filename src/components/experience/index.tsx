import styles from './styles.module.scss';

export const Experience = () => {
    return <div className={styles['experience']}>
        <div className={styles['title-container']}>
            <h2>Experience</h2>
        </div>
        <div className={styles['experience-list-container']}>
            <div className={styles['experience-line']}></div>
            <div className={styles['experience-list']}>
                <div className={styles['experience-item']}>
                    <div className={styles['experience-circle']}></div>
                    <div className={styles['experience-texts']}>
                        <h3>Gaza Sky Geeks</h3>
                        <p>A 6-months, full-time training to become a full-stack developer. Learned self-learning skills, plus improving English with the native speaker mentors.</p>
                    </div>
                    
                </div>
                <div className={styles['experience-item']}>
                    <div className={styles['experience-circle']}></div>
                    <div className={styles['experience-texts']}>
                        <h3>Founders & Coders</h3>
                        <p>A one-month projects with international team and clients to create MVP app. It improved my client-facing skills and prepared me for real-working environment.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}
