import React, {Component} from 'react'
import styles from './index.module.css'
import image from '../images/blue-origami-bird.png'

const Post = ({ description, author }) => {
    return (
        <div className={styles.container}>
        <img src={image} className={styles.image} />
        <p className={styles.description}>
        {description}
        </p>
        <div>
            <small>Author:</small>
        <span className={styles.user}>{ author.username }</span>
        </div>
        </div>
    )
}

export default Post