import React from "react";
import styles from "./QuizStartPage.module.css";
import { Button } from "react-bootstrap";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useParams } from "react-router-dom";
export default function QuizStartPage() {
  const [quizs] = UseQuiz();
  const { quizId } = useParams();
  const selectedQuiz = quizs.find((q) => q.id === Number(quizId));

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.number}>1</div>
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <p>Question X</p>
          <p>`"X/"${selectedQuiz} Completed`</p>
        </div>
        <form className={styles.page}>
          <div className={styles.question}>QUESTİON</div>
          <div className={styles.options}>
            <input type="radio" name="option"></input>
            <label>OPTİON1</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>OPTİON2</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>OPTİON3</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>OPTİON4</label>
          </div>
          <div className={styles.buttons}>
            <Button>Previus Question</Button>
            <Button>Next Question</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
