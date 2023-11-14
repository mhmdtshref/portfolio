import styles from './styles.module.scss';

export const Accounts = () => {
    return <div className={styles['accounts-and-contacts']}>
        <div className={styles['list-container']}>
            <div className={styles['list-item']}>
                <img src={process.env.PUBLIC_URL + '/assets/images/x-logo.svg'} alt='x' />
                <div className={styles['item-text-container']}>
                    <span>x.com/mhmdtshref</span>
                </div>
            </div>
            <div className={styles['list-item']}>
                <img src={process.env.PUBLIC_URL + '/assets/images/dribbble-logo.svg'} alt='dribbble' />
                <div className={styles['item-text-container']}>
                    <span>dribbble.com/mhmdtshref</span>
                </div>
            </div>
            <div className={styles['list-item']}>
                <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.svg'} alt='github' />
                <div className={styles['item-text-container']}>
                    <span>github.com/mhmdtshref</span>
                </div>
            </div>
            <div className={styles['list-item']}>
                <img src={process.env.PUBLIC_URL + '/assets/images/linkedin-logo.svg'} alt='linkedin' />
                <div className={styles['item-text-container']}>
                    <span>linkedin.com/in/mhmdtshref</span>
                </div>
            </div>
        </div>
        <div className={styles['list-container']}>
            <div className={styles['list-item']}>
                <img src={process.env.PUBLIC_URL + '/assets/images/email-logo.svg'} alt='email' />
                <div className={styles['item-text-container']}>
                    <span>mhmdtshref@gmail.com</span>
                </div>
            </div>
            <div className={styles['list-item']}>
                <img src={process.env.PUBLIC_URL + '/assets/images/phone-logo.svg'} alt='phone' />
                <div className={styles['item-text-container']}>
                    <span>+970 56 029 090</span>
                </div>
            </div>
            <div className={styles['list-item']}>
                <img src={process.env.PUBLIC_URL + '/assets/images/location-logo.svg'} alt='location' />
                <div className={styles['item-text-container']}>
                    <span>Hebron, Palestine</span>
                </div>
            </div>
        </div>
    </div>
}