import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import logo from '../images/communication.png'

const Header = () => {
    return (
        <header className={styles.navigation}>
                <img src={logo} className={styles.logo} /> 
                <Link href='#' title='Login' type="header" />
                <Link href='#' title='Register' type="header" />
                <Link href='#' title='Logout' type="header" />
                <Link href='#' title='News' type="header" />                                    
        </header>
    )

}

export default Header