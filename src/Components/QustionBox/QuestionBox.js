import React from "react";
import styles from "./QuestionBox.module.css";
export default function QuestionBox() {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <p>Active</p>
        <p>QUESTİON TİTLE</p>
        <p>QUSTİON TEXT</p>
        <div className={styles.tag}>
          <p>db</p>
          <p>db</p>
        </div>
      </div>
    </div>
  );
}
