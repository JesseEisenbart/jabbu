import Link from "next/link";
import styles from "./About.module.scss";
import { BsArrowRight } from 'react-icons/bs';
import cx from "../../scripts/combineClasses";
import StyledText from "../StyledText";

const Hero = () => {
  return (
    <div className={styles.container}>  
        <div className={cx(styles.split, styles.splitLeft)}>
            <div className={styles.content}>
                <section>
                    <h1 className={styles.header}>ABOUT</h1>
                    <p className={styles.about}>
                    <strong>Jake Coyle</strong> is a sound designer, composer, and audio specialist from Philadelphia that creates lush audio and music. 
                    For the past several years, he has created instrumental music, working with independent labels all across the globe, from the Belgium based <strong><a href="https://urban-waves.business.site/" rel="noreferrer" target="blank">Urban Waves</a></strong> to the Canadian <strong><a href="https://urban-waves.business.site/" rel="noreferrer" target="blank">Inner Ocean Records</a></strong>.
                    <br/>
                    <br/>
                    In addition, he has used his compositional and sound design talents with several independent film / game studios. 
                    His expertise in audio and music creation come together to create compositions that are wholly unique experiences, while still remaining emotionally succinct.
                    </p>
                </section>
                <section>
                    <h2 className={styles.header}>EDUCATION</h2>
                    <p className={styles.about}>Berklee Online (2019-2020) - Certification in Advanced Music Production </p>
                </section>
                <section>
                    <h2 className={styles.header}>SKILLS</h2>
                    <ul className={styles.skills}>
                        <li className={styles.skill}>Ableton</li>
                        <li className={styles.skill}>Photoshop</li>
                        <li className={styles.skill}>FMOD</li>
                        <li className={styles.skill}>Keyboard</li>
                        <li className={styles.skill}>Guitar</li>
                        <li className={styles.skill}>Unity</li>
                        <li className={styles.skill}>Analog Synthesizers</li>
                        <li className={styles.skill}>Virtual Synthesizers</li>
                    </ul>
                </section>
            </div>
        </div>
        <div className={cx(styles.split, styles.feature, styles.splitRight)}>
            {/* <StyledText text={"EMOTION"} horizontal="right" vertical="top"/> */}

            {/* <StyledText text={"STYLE"} horizontal="left" vertical="bottom"/>    */}
        </div>
    </div>
  )
}

export default Hero



// import React from 'react';
// import styles from "./About.module.scss";
// import StyledText from '../StyledText';

// const About = () => {
//   return (
//       <section className={styles.container}>

//       </section>
//   )
// };

// export default About;
