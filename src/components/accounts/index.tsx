import styles from './styles.module.scss';

export const Accounts = () => {
    return <div className={styles['accounts-and-contacts']}>
        <div className={styles['title-container']}>
            <h2>Accounts & Contact Info</h2>
        </div>
        <div className={styles['content']}>
            <div className={styles['list-container']}>
                <div className={styles['list-item']}>
                    <img src={process.env.PUBLIC_URL + '/assets/images/x-logo.svg'} alt='x' />
                    <div className={styles['item-text-container']}>
                        <a rel='noreferrer' target='_blank' href='https://twitter.com/mhmdtshref'>
                            <span>x.com/mhmdtshref</span>
                        </a>
                    </div>
                </div>
                <div className={styles['list-item']}>
                    <img src={process.env.PUBLIC_URL + '/assets/images/dribbble-logo.svg'} alt='dribbble' />
                    <div className={styles['item-text-container']}>
                        <a rel='noreferrer' target='_blank' href='https://dribbble.com/mhmdtshref'>
                            <span>dribbble.com/mhmdtshref</span>
                        </a>
                    </div>
                </div>
                <div className={styles['list-item']}>
                    <img src={process.env.PUBLIC_URL + '/assets/images/github-logo.svg'} alt='github' />
                    <div className={styles['item-text-container']}>
                        <a rel='noreferrer' target='_blank' href='https://github.com/mhmdtshref'>
                            <span>github.com/mhmdtshref</span>
                        </a>
                    </div>
                </div>
                <div className={styles['list-item']}>
                    <img src={process.env.PUBLIC_URL + '/assets/images/linkedin-logo.svg'} alt='linkedin' />
                    <div className={styles['item-text-container']}>
                        <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/mhmdtshref/'>
                            <span>linkedin.com/in/mhmdtshref</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles['list-container']}>
                <div className={styles['list-item']}>
                    <img src={process.env.PUBLIC_URL + '/assets/images/email-logo.svg'} alt='email' />
                    <div className={styles['item-text-container']}>
                        <a rel='noreferrer' target='_blank' href='mailto:mhmdtshref@gmail.com'>
                            <span>mhmdtshref@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className={styles['list-item']}>
                    <img src={process.env.PUBLIC_URL + '/assets/images/phone-logo.svg'} alt='phone' />
                    <div className={styles['item-text-container']}>
                        <a rel='noreferrer' target='_blank' href='tel:+970 56 029 090'>
                            <span>+970 56 029 090</span>
                        </a>
                    </div>
                </div>
                <div className={styles['list-item']}>
                    <img src={process.env.PUBLIC_URL + '/assets/images/location-logo.svg'} alt='location' />
                    <div className={styles['item-text-container']}>
                        <a rel='noreferrer' target='_blank' href='https://maps.app.goo.gl/NynnXuG4b9mnUCdWA'>
                            <span>Hebron, Palestine</span>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}