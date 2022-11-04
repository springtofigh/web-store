import React from "react";

import styles from "./Banner.module.css";
import banner from "../images/mountains.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="mountain" />
            <div className={styles.textContainer}>
                <h1>Botostart</h1>
                <p>
                    We're Learning <span>React.js</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;