import React from 'react'
import styles from './index.module.css'
import Link from '../link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div >
                <Link href='#' title='Going to 1' type="footer" />
                <Link href='#' title='Going to 2' type="footer" />
                <Link href='#' title='Going to 3' type="footer" />
                <Link href='#' title='Going to 4' type="footer" />
                <Link href='#' title='Going to 5' type="footer" />
                <Link href='#' title='Going to 6' type="footer" />
            </div>
            <p className={styles['footer-title']}>SofUni</p>
        </footer>
    )
}

export default Footer