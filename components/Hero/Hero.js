import Link from "next/link";
import styles from "./Hero.module.scss";
import { BsArrowRight } from 'react-icons/bs';
import cx from "../../scripts/combineClasses";
import StyledText from "../StyledText";

const Hero = () => {
  return (
    <div className={styles.container}>
        
        <div className={cx(styles.split, styles.titleContainer)}>
            <h1 className={styles.title}>{
                    `Music
                    that makes 
                    you feel `
                }<span className={styles.highlightedText}>alive</span>.
            </h1>
            <p className={styles.about}>Jake <i>"Jabbu"</i> Coyle creates music that gets people talking, moving, and feeling.</p>
            <p className={styles.contact}>Want to work together?&nbsp; <Link href="/contact"><span className={styles.getInTouch}>Get in touch&nbsp;<BsArrowRight className={styles.arrow}/></span></Link></p>
        </div>

        <div className={cx(styles.split, styles.feature)}>
            {/* <StyledText text={"EMOTION"} horizontal="right" vertical="top"/> */}
            <div className={styles.center}>
                <div className={styles.albumContainer}>
                    <img className={styles.album} alt="The Quiet Respite album cover" title="The Quiet Respite" src="https://i1.sndcdn.com/artworks-rRYknG0v9PT3OiRx-rp2QVQ-t500x500.jpg"/>
                    <span className={styles.albumText}>The Quiet Respite, listen now</span>
                </div>
            </div>
            {/* <StyledText text={"STYLE"} horizontal="left" vertical="bottom"/>    */}
        </div>
    </div>
  )
}

export default Hero