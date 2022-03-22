import React from 'react';
import Social from '../Social';
import Logo from '../Logo/Logo';
import styles from "./Nav.module.scss";
import Menu from '../Menu';
import { Squash as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';
import cx from '../../scripts/combineClasses';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <>
            <div className={cx(styles.bg, (scrollPosition != 0 ? styles.visible : ""))} />
            <nav className={styles.nav}>
                
                <div className={styles.top}>
                    <Logo scrolled={(scrollPosition != 0 ? true : false)}/>
                    <div className={styles.mobileToggle}><Hamburger  toggled={isOpen} toggle={setIsOpen} size={50}/></div>
                </div>
                <Menu isOpen={isOpen} />
                <Social />
            </nav>
        </>
    )
};

export default Nav;
