import styles from './styles.module.scss';

export const Education = () => {
    return <div className={styles['education']}>
        <div className={styles['title-container']}>
            <h2>Education</h2>
        </div>
        <div className={styles['education-list-container']}>
            <div className={styles['education-line']}></div>
            <div className={styles['education-list']}>
                <div className={styles['education-item']}>
                    <div className={styles['education-circle']}></div>
                    <div className={styles['education-texts']}>
                        <h3>Hussain High School</h3>
                        <p>I spent two years at scientific high school in Hebron, and graduated on 2014.</p>
                    </div>
                    
                </div>
                <div className={styles['education-item']}>
                    <div className={styles['education-circle']}></div>
                    <div className={styles['education-texts']}>
                        <h3>Palestine Polytechnic University</h3>
                        <p>From the high school to PPU to study Computer Science. I got B.A degree on 2018.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}