import React from "react";
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
  const selectedQuiz = quizs.find((q) => q.id === Number(quizId));
  function nextQuestion() {
    selectedQuiz.questions.map((question, index) => {
      setQuestion(selectedQuiz.questions[index].question);
      setOption1(selectedQuiz.questions[index].options[0]);
      setOption2(selectedQuiz.questions[index].options[1]);
      setOption3(selectedQuiz.questions[index].options[2]);
      setOption4(selectedQuiz.questions[index].options[3]);
      setCorrectOption(selectedQuiz.correctOption);
      setPoints(selectedQuiz.points);
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {selectedQuiz.questions.map((question, index) => (
          <div className={styles.number}>{index + 1}</div>
        ))}
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <p>Question X</p>
          <p>
            {selectedQuiz.totalQuestions}/{selectedQuiz.totalQuestions}{" "}
            Completed
          </p>
        </div>
        <form className={styles.page}>
          <div className={styles.question}>
            {selectedQuiz.questions[0].question}
          </div>
          <div className={styles.options}>
            <input type="radio" name="option"></input>
            <label>{selectedQuiz.questions[0].options[0]}</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>{selectedQuiz.questions[0].options[1]}</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>{selectedQuiz.questions[0].options[2]}</label>
          </div>
          <div className={styles.options}>
            <input
              type="radio"
              name="option"
              className={styles.options}
            ></input>
            <label>{selectedQuiz.questions[0].options[3]}</label>
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
