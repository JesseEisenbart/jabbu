import React from 'react';
import styles from "./Featured.module.scss";
import StyledText from '../StyledText';
import Image from 'next/image';

const Featured = ({topText="", bottomText=""}) => {
    return (
        <section className={styles.featured}>
            <StyledText text={topText} horizontal="right" vertical="top"/>
            <div className={styles.center}>
                <div className={styles.albumContainer}>
                    <img className={styles.album} alt="The Quiet Respite album cover" title="The Quiet Respite album cover" src="https://i1.sndcdn.com/artworks-rRYknG0v9PT3OiRx-rp2QVQ-t500x500.jpg"/>
                    <span className={styles.albumText}>The Quiet Respite, listen now</span>
                </div>
            </div>
            <StyledText text={bottomText} horizontal="right" vertical="bottom"/>   
        </section>
    )
};

export default Featured;
