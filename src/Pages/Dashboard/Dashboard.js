import React from "react";
import styles from "./Dashboard.module.css";
import Quiz from "../../Components/Quiz/Quiz";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const { quizs } = UseQuiz();
  return (
    <div>
      <header>
        <h1>Dasboard</h1>
        <div className={styles.header}>
          <h3>My Quizes</h3>
          <Link to="/CreateQuiz">
            {" "}
            <p>+Create Quiz</p>
          </Link>
        </div>
      </header>
      <main>
        <div className={styles.quizSelect}>Select a Quiz</div>
        <div className={styles.qustionBoxContainer}>
          {quizs.map((quiz) => (
            <Quiz quiz={quiz} />
          ))}
        </div>
      </main>
    </div>
  );
}
