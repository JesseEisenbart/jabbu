import React from 'react';
import styles from "./Portfolio.module.scss";
import StyledText from '../StyledText';
import Work from './Project/Work';
import Gradient from '../Gradient';

const About = () => {
    const deadUniocrnProjects = [
        {
            name: "Neon Nightmare",
            date: "June 2021",
            desc: "Created for “Amaze Me Game Jam”",
            link: "https://deadunicorngames.itch.io/neon-nightmare",
        },
        {
            name: "Super Alien Abduction",
            date: "August 2021",
            desc: "Created for “Opera GX Game Jam”",
            link: "https://gamejolt.com/games/Super-Alien-Abduction/638885",
        },
        {
            name: "Revolver",
            date: "October 2021",
            desc: "Created for “Ludum Dare Game Jam 49”",
            link: "https://deadunicorngames.itch.io/revolver",
        },
        {
            name: "Return",
            date: "December 2021",
            desc: "",
            link: "https://www.returnthegame.com/",
        },

    ]
    const quiteGoodProjects = [
        {
            name: "Swing Shroom",
            date: "April 2021",
            desc: "Created for “Ludum Dare Game Jam 48”",
            link: "https://quite-good.itch.io/swing-shroom",
        },
        {
            name: "Crazy Cauldron",
            date: "October 2021",
            desc: "Created for “Ludum Dare Game Jam 49”, ported to mobile",
            link: "https://quite-good.itch.io/crazy-cauldron",
        },
    ]
    const synesthesiaProjects = [
        {
            name: "Tragedy of the Commons (Tracks 25 - 31)",
            date: "February 2021",
            desc: "",
            link: "https://www.theoutlawoceanmusic.com/artists/compilation",
        },
    ]
    const aquaticGroupGraphicsProjects = [
        {
            name: "Trailer for full animation",
            date: "January 2021",
            desc: "",
            link: "https://www.youtube.com/watch?v=zifzyFhZ8gA",
        },
        {
            name: "Full animation",
            date: "March 2021",
            desc: "",
            link: "https://dcunextgen.org/about-dcu-next-generation/",
        },
    ]
    const inFocusFilmSchoolProjects = [
        {
            name: "MAY",
            date: "Directed by: Chenneth Weeraratne",
            desc: "",
            link: "",
        },
    ]
    const innerOceanProjects = [  
        {
            name: "",
            date: "",
            desc: " Conceptualized and executively produced the full album “The Quiet Respite”.",
            link: "",
        },
        {
            name: "The Quiet Respite",
            date: "April 2021",
            desc: "",
            link: "https://fanlink.to/jabbu",
        },
        {
            name: "",
            date: "",
            desc: "Contributed tracks for the following projects:",
            link: "",
        },
        {
            name: "Futures Vol 7",
            date: "June 2021",
            desc: "",
            link: "",
        },
        {
            name: "Gradients",
            date: "May 2021",
            desc: "",
            link: "",
        },
        {
            name: "First Wave",
            date: "September 2020",
            desc: "",
            link: "",
        },
        {
            name: "Futures Vol 6",
            date: "April 2019",
            desc: "",
            link: "",
        },
        {
            name: "Bless Vol 2",
            date: "July 2018",
            desc: "",
            link: "",
        },
        {
            name: "Futures Vol 5",
            date: "March 2018",
            desc: "",
            link: "",
        },
        {
            name: "Futures Vol 4",
            date: "October 2017",
            desc: "",
            link: "",
        },
    ]
    const aviaryBridgeProjects = [
        {
            name: "Winter Days",
            date: "February 2021",
            desc: "",
            link: "",
        },
        {
            name: "Autumn Nights",
            date: "November 2020",
            desc: "",
            link: "",
        },
    ]
    const urbanWavesProjects = [
        {
            name: "Before the Sun Take Rest",
            date: "May 2020",
            desc: "",
            link: "",
        }, 
    ]
    const autumnTheoryProjects = [
        {
            name: "Jovian Summer",
            date: "June 2020",
            desc: "",
            link: "",
        }, 
        {
            name: "Weather Man",
            date: "December 2018",
            desc: "",
            link: "",
        }, 
    ]
    const kushGongProjects = [
        {
            name: "This Whole Time",
            date: "November 2019",
            desc: "",
            link: "https://kushgongvinyl.bandcamp.com/album/this-whole-time",
        }, 
    ]
    const insertTapesProjects = [
        {
            name: "One Fine Day",
            date: "November 2019",
            desc: "",
            link: "",
        }, 
        {
            name: "Insert Tapes Vol 3",
            date: "May 2019",
            desc: "",
            link: "",
        }, 
    ]

    return (
        <>
        <div className={styles.banner} >
            <h1>COMPOSITION & SOUND DESIGN</h1>
            <p className={styles.about}>
                Jake has lent his compositional and sound design experience to multiple video game and production companies. His original scores breathe life into projects and his dynamic sound design creates immersive worlds to explore.
            </p>
        </div>  
        <section className={styles.container}>
            <div className={styles.portfolioGroup}>
                <ul className={styles.portfolioList}><Work title={"Dead Unicorn Game Studios"} desc={"Composed the soundtracks / sound design for:"} date={"2020 - Present"} list={deadUniocrnProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"Quite Good Game Studios"} desc={"Composed the soundtrack and created SFX for:"} date={"2020 - Present"} list={quiteGoodProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"Synesthesia Media"} desc={"Contracted to produce music inspired by the book ‘The Outlaw Ocean’ - Written By Ian Urbina."} date={"2020 - 2021 "} list={synesthesiaProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"Aquatic Group Graphics / DCU NextGen"} desc={"Contracted to produce music for an animation for DCU NextGen, a nonprofit teaching financialliteracy to children."} date={"2020 - 2021 "} list={aquaticGroupGraphicsProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"InFocus Film School"} desc={"Composed the score for a student film"} date={"2020 - 2021 "} list={inFocusFilmSchoolProjects}></Work></ul>
            </div>
        </section>
        <div className={styles.banner} >
            <h1>MUSIC PRODUCTION</h1>
            <p className={styles.about}>
                Along with self-released music, Jake has created music for labels all around the globe under the name ‘Jabbu’; everything from full length albums, to tracks featured on large compilations.
            </p>
        </div>  
        <section className={styles.container}>
            <div className={styles.portfolioGroup}>
                <ul className={styles.portfolioList}><Work title={"Inner Ocean Records"} desc={""} date={"2020 - Present"} list={innerOceanProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"Aviary Bridge"} desc={"Contributed tracks for the following projects:"} date={"2020 - Present"} list={aviaryBridgeProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"Urban Waves"} desc={"Conceptualized and executively produced the album “Before the Sun take Rest”:"} date={"2020 - Present"} list={urbanWavesProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"Autumn Theory Records"} desc={"Conceptualized and executively produced the following:"} date={"2020 - Present"} list={autumnTheoryProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"Kush Gong Vinyl"} desc={"Conceptualized and executively produced the album “This Whole Time”:"} date={"2020 - Present"} list={kushGongProjects}></Work></ul>
                <ul className={styles.portfolioList}><Work title={"Insert Tapes "} desc={"Contributed tracks for the following projects:"} date={"2020 - Present"} list={insertTapesProjects}></Work></ul>
            </div>
        </section>
        </>
    )
};

export default About;
