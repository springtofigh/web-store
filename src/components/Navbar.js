import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../images/Logo.jpg";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className= {styles.listContainer}>
                <ul className={styles.list}>
                    <li><Link to="/">Home page</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img src={logo} className={styles.logo} alt="Logo" />
            </div>
        </header>
    );
};

export default Navbar;