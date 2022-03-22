import styles from "./Gradient.module.scss";

import React from 'react'

const Gradient = ({ textColor="white", text="", gradient="white"}) => {
    return (
        <div className={styles.gradient} style={{backgroundImage: gradient}}>
            <h1 style={{color: textColor}}>{text}</h1>
        </div>
    )
}

export default Gradient