import React from 'react';
import styles from "./Menu.module.scss";
import cx from '../../scripts/combineClasses';
import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBandcamp } from 'react-icons/fa';
import { useRouter } from 'next/router'


const Menu = ({ isOpen }) => {
    const { asPath } = useRouter();

    
    return (
        <ul className={cx(styles.list, isOpen ? styles.open : "")}>
            <li className={cx(styles.link, asPath == "/" ? styles.selected : "")}><Link href="/">HOME</Link></li>
            <li className={cx(styles.link, asPath == "/about" ? styles.selected : "")}><Link href="/about">ABOUT</Link></li>
            <li className={cx(styles.link, asPath == "/portfolio" ? styles.selected : "")}><Link href="/portfolio">PORTFOLIO</Link></li>
            <li className={cx(styles.link, asPath == "/contact" ? styles.selected : "")}><Link href="/contact">CONTACT</Link></li>
            <li className={cx(styles.link, )}><a href="https://open.spotify.com/artist/2z05oYAAyzrRNbWrNFSrDt?si=sHqgXSlJQ9iCODMXP035SA" rel="noreferrer" target="blank"><FaSpotify/></a></li>
            <li className={cx(styles.link, )}><a href="https://jakeandbakebeats.bandcamp.com/" rel="noreferrer" target="blank"><FaBandcamp/></a></li>
            <li className={cx(styles.link, )}><a href="https://www.instagram.com/jabbu_jake/" rel="noreferrer" target="blank"><FaInstagram/></a></li>
            <li className={cx(styles.link, )}><a href="https://soundcloud.com/jakeandbakebeats" rel="noreferrer" target="blank"><FaSoundcloud/></a></li>
        </ul>
    )
};

export default Menu;
