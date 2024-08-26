import React from "react";
import styles from "./EditQuiz.module.css";
export default function EditQuiz() {
  return (
    <div>
      <div className={styles.quizContainer}>
        <div className={styles.sidebar}>sidebar</div>
        <div className={styles.main}>main</div>
      </div>
    </div>
  );
}
