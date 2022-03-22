import React from 'react';
import PropTypes from 'prop-types';
import cx from '../../scripts/combineClasses';
import styles from "./StyledText.module.scss";

const StyledText = ({text="test", horizontal="left", vertical="top"}) => {
    
    return (
        <div className={cx(horizontal === "left" ? styles.left : styles.right, vertical === "top" ? styles.top : styles.bottom, styles.text)}>
            <span>{text}</span>
        </div>    
    )
};



export default StyledText;
