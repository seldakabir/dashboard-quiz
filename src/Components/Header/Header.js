import React from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.header}>
      <img
        src="./Images/logo.png"
        alt="logo"
        className={styles.logo}
        onClick={goHome}
      ></img>

      <div className={styles.sign}>
        <p>SingUp</p>
        <p>SingIn</p>
      </div>
    </div>
  );
}
