import React from "react";
import styles from "./EditQuiz.module.css";
export default function EditQuiz() {
  return (
    <div>
      <hr className={styles.hrColor}></hr>
      <div className={styles.quizContainer}>
        <div className={styles.sidebar}>
          <div className={styles.qustionContainer}>
            <p className={styles.questNum}>1</p>
            <p>Qustion Text</p>
          </div>
          <div className={styles.qustionContainer}>
            <p className={styles.questNum}>1</p>
            <p>Qustion Text</p>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.questionHeader}>
            <p>Add Qustion</p>
            <p> X/X Added</p>
          </div>

          <form>
            <input placeholder="title"></input>
            <div className={styles.correctContainer}>
              <p>Options</p>
              <p>Correct</p>
            </div>
            <input placeholder="option 1"></input>
            <input type="checkbox"></input>
            <input placeholder="option 2"></input>
            <input type="checkbox"></input>
            <input placeholder="option 3"></input>
            <input type="checkbox"></input>
            <input placeholder="option 4"></input>
            <input type="checkbox"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
