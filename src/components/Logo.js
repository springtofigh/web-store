import React from 'react';

import styles from "./Logos.module.css";

import apple from "../images/Apple-Logo.png";
import samsung from "../images/Samsung.png";
import xiaomi from "../images/Xiaomi-Logo.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={apple}  alt="apple-logo"/>
                <img src={samsung}  alt="samsung-logo"/>
                <img src={xiaomi}  alt="xiaomi-logo"/>
            </div>
        </div>
    );
};

export default Logos;