import React from "react";
import styles from "./FinishedPage.module.css";
import { UseQuiz } from "../../Contexts/QuizProvider";
export default function FinishedPage() {
  const { answerPoints } = UseQuiz();

  return (
    <div>
      <header>
        <p className={styles.text}>Your Points:{answerPoints}</p>
      </header>
    </div>
  );
}
