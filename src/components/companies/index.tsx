import styles from './styles.module.scss';

export const Companies = () => {
    return <div className={styles['companies-container']}>
        <div className={styles['title-container']}>
            <h2>Companies</h2>
        </div>
        <div className={styles['logos-container']}>
            <div className={styles['item-container']}>
                <a rel='noreferrer' target='_blank' href='https://www.kiitos-tech.com'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/kiitos.svg'} alt='kiitos' />
                </a>
            </div>
            <div className={styles['item-container']}>
                <a rel='noreferrer' target='_blank' href='https://www.sum.ae'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/sum.svg'} alt='sum' />
                </a>
            </div>
            <div className={styles['item-container']}>
                <a rel='noreferrer' target='_blank' href='https://fabric.inc/'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/fabric.svg'} alt='fabric' />
                </a>
            </div>
            <div className={styles['item-container']}>
                <a rel='noreferrer' target='_blank' href='https://www.tapcareers.io/'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/tap.svg'} alt='tap' />
                </a>
            </div>
        </div>
    </div>
}
