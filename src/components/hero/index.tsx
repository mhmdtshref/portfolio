import { Navbar } from './navbar'
import styles from './styles.module.scss'

export const Hero = () => {
    return <div className={styles.hero}>
        <div className={styles['hero-styler-container']}>
            <img src={process.env.PUBLIC_URL + '/assets/images/hero-styler.svg'} alt='hero styler' />
        </div>
        <div className={styles['hero-content-container']}>
            <div  className={styles['navbar-container']}>
                <Navbar />
            </div>
            <div className={styles['content-container']}>
                <div className={styles['about-container']}>
                    <div className={styles['about-texts']}>
                        <span className={styles['hi-text']}>Hey, I'm</span>
                        <h1 className={styles['name-text']}>Mohamed Sharif</h1>
                        <h1 className={styles['specialty-text']}>A Software Developer</h1>
                        <p className={styles['brief-text']}>
                            4+ years of experience in full stack web development using PERN technologies. My experience includes agile development, building, testing and deploying web apps using modern technologies with experience in AWS services integrations under remote working environments.
                        </p>
                    </div>
                </div>
                <img className={styles['personal-image']} src={process.env.PUBLIC_URL + '/assets/images/personal.png'} alt='peronal image' />
            </div>
        </div>
        
        
    </div>
}
