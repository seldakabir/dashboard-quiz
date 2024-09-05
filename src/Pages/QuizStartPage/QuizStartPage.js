import React, { useEffect, useState } from "react";
import styles from "./QuizStartPage.module.css";
import { Button } from "react-bootstrap";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useParams } from "react-router-dom";
export default function QuizStartPage() {
  const {
    quizs,
    question,
    setQuestion,
    option1,
    setOption1,
    option2,
    setOption2,
    option3,
    setOption3,
    option4,
    setOption4,
    correctOption,
    setCorrectOption,
    points,
    setPoints,
  } = UseQuiz();

  const { quizId } = useParams();
  const [selectQuestionIndex, setSelectQuestionIndex] = useState(0);

  const selectedQuiz = quizs.find((q) => q.id === Number(quizId));
  let selected = selectedQuiz?.questions[selectQuestionIndex];
  console.log("quiz:");
  console.log(selected);
  function nextQuestion() {
    selected = setSelectQuestionIndex(selectQuestionIndex + 1);
    console.log(selected);
  }
  function prevQuestion() {
    if (selectQuestionIndex === 0) return;
    selected = setSelectQuestionIndex(selectQuestionIndex - 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {selectedQuiz?.questions.map((question, index) => (
          <div
            className={`${styles.number} ${
              selectQuestionIndex === index ? styles.numActive : ""
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <p>Question {selectQuestionIndex + 1}</p>
          <p>
            {selectQuestionIndex + 1}/{selectedQuiz?.totalQuestions} Completed
          </p>
        </div>
        <form className={styles.page}>
          <div className={styles.question}>{selected?.question}</div>
          <div className={styles.options}>
            <input type="radio" name="option"></input>
            <label>{selected?.options[0]}</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>{selected?.options[1]}</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>{selected?.options[2]}</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>{selected?.options[3]}</label>
          </div>
          <div className={styles.buttons}>
            <Button onClick={prevQuestion}>Previus Question </Button>
            <Button onClick={nextQuestion}>
              {selectQuestionIndex < selectedQuiz?.questions.length - 1
                ? "Next Question"
                : "confirm"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
