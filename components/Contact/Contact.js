import styles from "./Contact.module.scss";
import { useState } from "react";
import { FaSpotify } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBandcamp } from 'react-icons/fa';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");


    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
    
    }

    return (
        <>
            <div className={styles.banner} >
                <h1>GET IN TOUCH</h1>
                <p className={styles.about}>
                    Interested in working together? Contact Jake for all your compositional and sound design needs!
                    <br/>
                    <a href="mailto:jesseeisenbart@gmail.com">jakeandbakebeats@yahoo.com</a>
                </p>
                <div className={styles.social}>
                    <a href="https://open.spotify.com/artist/2z05oYAAyzrRNbWrNFSrDt?si=sHqgXSlJQ9iCODMXP035SA" rel="noreferrer" target="blank"><FaSpotify/></a>
                    <a href="https://jakeandbakebeats.bandcamp.com/" rel="noreferrer" target="blank"><FaBandcamp/></a>
                    <a href="https://www.instagram.com/jabbu_jake/" rel="noreferrer" target="blank"><FaInstagram/></a>
                    <a href="https://soundcloud.com/jakeandbakebeats" rel="noreferrer" target="blank"><FaSoundcloud/></a>
                </div>
            </div>
            {/* <div className={styles.contactContainer}>
                <div className={styles.contact}>
                    <form onSubmit={handleOnSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" className={styles.formControl} value={name} onChange={onNameChange} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Email</label>
                            <input type="text" className={styles.formControl} value={email} onChange={onEmailChange} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Email</label>
                            <textarea type="text" className={styles.formControl} value={message} onChange={onMessageChange} />
                        </div>
                        <button type="submit" >SUBMIT</button>
                    </form>
                </div>  
                <div className={styles.social}>
                </div>  
            </div>   */}
        </>
    )
}

export default Contact