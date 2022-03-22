import styles from "./Intro.module.scss";
import StyledText from '../StyledText';
import ReactTyped from "react-typed";
import { BsArrowRight } from 'react-icons/bs';
import Link from "next/link";

const Intro = () => {

    let date = new Date().getFullYear();

    return (
        <section className={styles.container}> 
            <StyledText text="WELCOME" horizontal="left" vertical="top"/>
            <div>
                <h1 className={styles.title}>{
                    `Music
                    that makes 
                    you feel `
                }<span className={styles.highlightedText}>alive</span>.
            </h1>
                <p className={styles.about}>Jake <i>&quot;Jabbu&quot;</i> Coyle creates music that gets people talking, moving, and feeling.</p>
                <p className={styles.contact}>Want to work together?&nbsp; <Link href="/contact"><span className={styles.getInTouch}>Get in touch&nbsp;<BsArrowRight className={styles.arrow}/></span></Link></p>
            </div>  
            <StyledText text={"© "+date} horizontal="left" vertical="bottom"/>
        </section>
    )
};

export default Intro;
