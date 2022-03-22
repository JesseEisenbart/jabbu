import React from 'react'
import { FaSpotify } from 'react-icons/fa'
import { FaSoundcloud } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaBandcamp } from 'react-icons/fa'
import styles from './Social.module.scss'

const Social = () => {
    return (
        <ul className={styles.list}>           
            <li className={styles.link}><a href="https://open.spotify.com/artist/2z05oYAAyzrRNbWrNFSrDt?si=sHqgXSlJQ9iCODMXP035SA" rel="noreferrer" target="blank"><FaSpotify/></a></li>
            <li className={styles.link}><a href="https://jakeandbakebeats.bandcamp.com/" rel="noreferrer" target="blank"><FaBandcamp/></a></li>
            <li className={styles.link}><a href="https://www.instagram.com/jabbu_jake/" rel="noreferrer" target="blank"><FaInstagram/></a></li>
            <li className={styles.link}><a href="https://soundcloud.com/jakeandbakebeats" rel="noreferrer" target="blank"><FaSoundcloud/></a></li>
        </ul>
    )
}

export default Social
