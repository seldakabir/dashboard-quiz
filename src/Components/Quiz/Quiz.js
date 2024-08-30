import React, { useState } from "react";
import styles from "./Quiz.module.css";
import { UseQuiz } from "../../Contexts/QuizProvider";

export default function Quiz({ quiz, onClickQuiz }) {
  const { quizs } = UseQuiz();

  return (
    <div className={styles.boxContainer} onClick={() => onClickQuiz(quiz.id)}>
      <div className={styles.box}>
        <h3 className={styles.status}>{quiz.status ? "Active" : "Deactive"}</h3>
        <h2>{quiz.title}</h2>
        <h3>{quiz.explain}</h3>
        <div className={styles.tag}>
          {quiz.topic.map((topic) => (
            <p>{topic}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
