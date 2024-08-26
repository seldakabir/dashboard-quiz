import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import HomePge from "../../Pages/HomePge";
export default function Header() {
  return (
    <div className={styles.header}>
      <img src="./Images/logo.png" alt="logo" className={styles.logo}></img>

      <div className={styles.sign}>
        <p>SingUp</p>
        <p>SingIn</p>
      </div>
    </div>
  );
}
