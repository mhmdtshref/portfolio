import styles from './styles.module.scss';

export const MyWork = () => {
    return <div className={styles['my-work']}>
        <div className={styles['title-container']}>
            <h2>My Work</h2>
        </div>

        <div className={styles['work-content']}>
            <div className={styles['work-item']}>
                <div className={`${styles['content-side']} ${styles['margin-right']}`}>
                    <h3>SUM</h3>
                    <p>E-Commerce website collects offers and coupon codes from multiple affiliate networks and shows then in one website.</p>
                    <p>Also, includes creating offers and events manually so users can get more benefits.</p>
                    <img className={styles['company-logo']} src={process.env.PUBLIC_URL + '/assets/images/kiitos.svg'} alt='kiitos' />
                </div>
                <div className={styles['image-side']}>
                    <img className={styles['project-image']} src={process.env.PUBLIC_URL + '/assets/images/sum-project.png'} alt='sum project' />
                </div>
            </div>
            <div className={styles['work-item']}>
                <div className={styles['image-side']}>
                    <img className={styles['project-image']} src={process.env.PUBLIC_URL + '/assets/images/menuator-project.png'} alt='menuator project' />
                </div>
                <div className={`${styles['content-side']} ${styles['margin-left']}`}>
                    <h3>Menuator</h3>
                    <p>Provides online-menu services for restaurants. It helps restaurants owners create and manage their online menus that been entered by QR code.</p>
                    <p>It's a private project that I've been working on it for year and a half at my free-time.</p>
                </div>
            </div>
            <div className={styles['work-item']}>
                <div className={`${styles['content-side']} ${styles['margin-right']}`}>
                    <h3>RIS</h3>
                    <p>A private radiology information system to handle patient journey in the center, storing and monitoring his status, and assign him to the correct employees.</p>
                    <p>Also, the system is integrated with radiology machines using DICOM.</p>
                    <img className={styles['company-logo']} src={process.env.PUBLIC_URL + '/assets/images/kiitos.svg'} alt='kiitos' />
                </div>
                <div className={styles['image-side']}>
                    <img className={styles['project-image']} src={process.env.PUBLIC_URL + '/assets/images/ris-project.png'} alt='sum project' />
                </div>
            </div>
        </div>
    </div>
}
