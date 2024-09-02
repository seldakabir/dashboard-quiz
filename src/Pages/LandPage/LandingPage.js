import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div>
      <p className={styles.text}>
        Everything You Need To Build And Manage Your Quiz
      </p>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <Link to="/QuizStart">
            <p className={styles.iconContainer}>
              <img
                src="./images/hummer.jpg"
                alt="image."
                className={styles.icons}
              ></img>
            </p>
            <p className={styles.boxText}>Start a Quiz</p>
          </Link>
        </div>

        <div className={styles.box}>
          <Link to="/Dashboard">
            {" "}
            <p className={styles.iconContainer}>
              <img
                src="./images/cube.png"
                alt="image."
                className={styles.icons}
              ></img>
            </p>
            <p className={styles.boxText}>Add Questions to Your Quiz</p>
          </Link>
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
      <div className={styles.heartContainer}>
        <img
          src="./images/heart.png"
          alt="heart"
          className={styles.heart}
        ></img>
        <p className={styles.heartText}>
          Save Recourses and Money by Avoiding Print-Out Quiz Sheets and Test
          Paper .Users Can Complete Yours Paper less Quiz via Quiz WebPage.
        </p>
      </div>
    </div>
  );
}
