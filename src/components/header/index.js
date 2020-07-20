import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import logo from '../images/communication.png'
import navRender from '../utils/nav-render'

const Header = () => {
    const linkElements = navRender()
    return (
        <header className={styles.navigation}>
            <img src={logo} className={styles.logo} />
            {
                linkElements.map(el => {
                    return (
                        <Link href={el.link} title={el.title} type="header" />
                    )
                })
            }

        </header>
    )

}

export default Header