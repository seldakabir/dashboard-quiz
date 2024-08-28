import React from "react";
import styles from "./Dashboard.module.css";
import QuestionBox from "../../Components/QustionBox/QuestionBox";
export default function Dashboard() {
  return (
    <div>
      <header>
        <h1>Dasboard</h1>
        <div className={styles.header}>
          <h3>My Quizes</h3>
          <button>+Create Quiz</button>
        </div>
      </header>
      <main>
        <div className={styles.quizSelect}>Select a Quiz</div>
        <div className={styles.qustionBoxContainer}>
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
        </div>
      </main>
    </div>
  );
}
