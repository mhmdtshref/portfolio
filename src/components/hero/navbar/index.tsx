import styles from './styles.module.scss'

export const Navbar = () => {
    return <div className={styles['hero-nav']}>
        <ul className={styles['nav-list']}>
            <li className={styles['list-item']}>Technologies</li>
            <li className={styles['list-item']}>Companies</li>
            <li className={styles['list-item']}>Education</li>
            <li className={styles['list-item']}>Accounts</li>
        </ul>
    </div>
}
