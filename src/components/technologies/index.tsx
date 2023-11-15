import styles from './styles.module.scss';

export const Technologies = () => {
    return <div className={styles['technologies-container']}>
        <div className={styles['title-container']}>
            <h2>Technologies</h2>
        </div>
        <div className={styles['description-container']}>
            <p>
                During my journey, I always focus on gaining more experience. I learned how be be a self-learner, which is the most important skill to learn in this century.
            </p>
            <p>
                The following are the top 4 technologies I focused on recently. This includes many libraries and tools I can use beside them:
            </p>
        </div>
        <div className={styles['logos-container']}>
            <div className={styles['item-container']}>
                <a rel='noreferrer' target='_blank' href='https://nodejs.org/en/'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/nodejs.svg'} alt='nodejs' />
                </a>
            </div>
            <div className={styles['item-container']}>
                <a rel='noreferrer' target='_blank' href='https://react.dev/'>
                    <img className={styles['personal-image']} src={process.env.PUBLIC_URL + '/assets/images/reactjs.svg'} alt='reactjs' />
                </a>
            </div>
            <div className={styles['item-container']}>
                <a rel='noreferrer' target='_blank' href='https://nextjs.org/'>
                    <img className={styles['personal-image']} src={process.env.PUBLIC_URL + '/assets/images/nextjs.svg'} alt='nextjs' />
                </a>
            </div>
            <div className={styles['item-container']}>
                <a rel='noreferrer' target='_blank' href='https://aws.amazon.com/'>
                    <img className={styles['personal-image']} src={process.env.PUBLIC_URL + '/assets/images/aws.svg'} alt='amazon web services' />
                </a>
            </div>
        </div>
    </div>
}