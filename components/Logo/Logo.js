import React from 'react'
import styles from "./Logo.module.scss"
import cx from '../../scripts/combineClasses'

const Logo = ({scrolled=false}) => {
    return (
        <span className={cx(styles.logo, (scrolled ? styles.scrolled : ""))}>JABBU</span>
    )
}

export default Logo
