import React from "react";
import styles from "./Quiz.module.css";

export default function Quiz({ quiz }) {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <h3 className={styles.status}>{quiz.status}</h3>
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
