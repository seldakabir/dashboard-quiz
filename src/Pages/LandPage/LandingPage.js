import React from "react";
import styles from "./LandingPage.module.css";
export default function LandingPage() {
  return (
    <div>
      <p className={styles.text}>
        Everything You Need To Build And Manage Your Quiz
      </p>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <p className={styles.iconContainer}>
            <img
              src="./images/hummer.jpg"
              alt="image."
              className={styles.icons}
            ></img>
          </p>
          <p className={styles.boxText}>Create a Quiz</p>
        </div>

        <div className={styles.box}>
          <p className={styles.iconContainer}>
            <img
              src="./images/cube.png"
              alt="image."
              className={styles.icons}
            ></img>
          </p>
          <p className={styles.boxText}>Add Questions to Your Quiz</p>
        </div>

        <div className={styles.box}>
          <p className={styles.iconContainer}>
            <img
              src="./images/rocket.png"
              alt="image."
              className={styles.rocket}
            ></img>
          </p>
          <p className={styles.boxText}>Set Status Of Quiz To Active</p>
        </div>
      </div>
    </div>
  );
}
