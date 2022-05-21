import Link from "next/link";
import styles from "./Hero.module.scss";
import { BsArrowRight } from 'react-icons/bs';
import cx from "../../scripts/combineClasses";
import StyledText from "../StyledText";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.container}>
        
        <div className={cx(styles.split, styles.titleContainer)}>
            <h1 className={styles.title}>{
                    `Audio
                    that transports  
                    you to new `
                }<span className={styles.highlightedText}>realms</span>.
            </h1>
            <p className={styles.about}>Jake <i>&quot;Jabbu&quot;</i> Coyle creates sound and music that gets people talking, moving, and feeling.</p>
            <p className={styles.contact}>Want to work together?&nbsp; <Link href="/contact"><span className={styles.getInTouch}>Get in touch&nbsp;<BsArrowRight className={styles.arrow}/></span></Link></p>
        </div>

        <div className={cx(styles.split, styles.feature)}>
            {/* <StyledText text={"EMOTION"} horizontal="right" vertical="top"/> */}
            <div className={styles.center}>
                <div className={styles.albumContainer}>
                    <Image className={styles.album} alt="The Quiet Respite" width={270} height={270} title="The Quiet Respite" src="/albumCover.jpg"/>
                    <span className={styles.albumText}>The Quiet Respite, listen now</span>
                </div>
            </div>
            {/* <StyledText text={"STYLE"} horizontal="left" vertical="bottom"/>    */}
        </div>
    </div>
  )
}

export default Hero